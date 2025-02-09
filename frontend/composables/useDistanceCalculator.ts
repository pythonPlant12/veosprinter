import { ref } from "vue";

export const useDistanceCalculator = () => {
  const distance = ref<number | null>(null);
  const error = ref<string | null>(null);
  const loading = ref(false);
  const isInTallinn = ref(false);

  // Tallinn's approximate border coordinates (polygon vertices in clockwise order)
  const tallinnBorderPoints: Coordinates[] = [
    { lat: 59.4713, lng: 24.7991 }, // Northeast
    { lat: 59.4485, lng: 24.8876 }, // East
    { lat: 59.3612, lng: 24.7674 }, // Southeast
    { lat: 59.3528, lng: 24.6571 }, // Southwest
    { lat: 59.4398, lng: 24.6088 }, // Northwest
    { lat: 59.4713, lng: 24.7991 }, // Close the polygon by repeating first point
  ];

  const isPointInTallinn = (point: Coordinates): boolean => {
    let inside = false;
    for (
      let i = 0, j = tallinnBorderPoints.length - 1;
      i < tallinnBorderPoints.length;
      j = i++
    ) {
      const xi = tallinnBorderPoints[i].lng;
      const yi = tallinnBorderPoints[i].lat;
      const xj = tallinnBorderPoints[j].lng;
      const yj = tallinnBorderPoints[j].lat;

      const intersect =
        yi > point.lat !== yj > point.lat &&
        point.lng < ((xj - xi) * (point.lat - yi)) / (yj - yi) + xi;

      if (intersect) inside = !inside;
    }
    return inside;
  };

  const findClosestBorderPoint = (destination: Coordinates): Coordinates => {
    let closestPoint = tallinnBorderPoints[0];
    let minDistance = calculateHaversineDistance(
      destination,
      tallinnBorderPoints[0],
    );

    for (const point of tallinnBorderPoints) {
      const distance = calculateHaversineDistance(destination, point);
      if (distance < minDistance) {
        minDistance = distance;
        closestPoint = point;
      }
    }

    return closestPoint;
  };

  const calculateHaversineDistance = (
    point1: Coordinates,
    point2: Coordinates,
  ): number => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(point2.lat - point1.lat);
    const dLng = toRad(point2.lng - point1.lng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(point1.lat)) *
        Math.cos(toRad(point2.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toRad = (degrees: number): number => {
    return degrees * (Math.PI / 180);
  };

  const calculateDistance = async (address: string) => {
    loading.value = true;
    error.value = null;
    isInTallinn.value = false;

    try {
      // Get coordinates for the destination address using Google Geocoding API
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${useRuntimeConfig().public.googleMapsApiKey}`,
      );

      const data: GeocodingResponse = await response.json();

      if (data.status !== "OK" || !data.results.length) {
        throw new Error("Failed to geocode address");
      }

      const destinationCoords = data.results[0].geometry.location;

      // Check if the destination is within Tallinn
      if (isPointInTallinn(destinationCoords)) {
        distance.value = 0;
        isInTallinn.value = true;
      } else {
        const closestBorderPoint = findClosestBorderPoint(destinationCoords);
        distance.value = calculateHaversineDistance(
          closestBorderPoint,
          destinationCoords,
        );
      }
    } catch (e) {
      error.value = e instanceof Error ? e.message : "An error occurred";
      distance.value = null;
    } finally {
      loading.value = false;
    }
  };

  return {
    calculateDistance,
    distance,
    error,
    loading,
    isInTallinn,
  };
};
