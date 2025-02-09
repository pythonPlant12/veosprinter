export const container = (formData) => {
  const api = useRuntimeConfig().public.api;

  const getContainer = async () => {
    try {
      return await $fetch(`${api}/container/`, {
        method: "GET",
        params: {
          wastage: formData.wastage,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error fetching container:", error);
      throw error;
    }
  };

  return {
    getContainer,
  };
};
