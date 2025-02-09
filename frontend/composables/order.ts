export const order = (formData) => {
  const api = useRuntimeConfig().public.api;

  const getOrderData = async () => {
    try {
      const orderData = await $fetch(`${api}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: orderFormData.value,
      });
      console.log(orderData);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  return getOrderData;
};
