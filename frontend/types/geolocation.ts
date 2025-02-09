interface Coordinates {
  lat: number;
  lng: number;
}

export interface GeocodingResponse {
  results: {
    geometry: {
      location: Coordinates;
    };
  }[];
  status: string;
}
