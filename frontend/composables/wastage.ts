export const wastage = () => {
  const api = useRuntimeConfig().public.api;

  const getWastage = async () => {
    try {
      return await $fetch(`${api}/wastage/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error fetching wastage:", error);
      throw error;
    }
  };

  return {
    getWastage,
  };
};
