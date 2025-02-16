export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const response = await $fetch(
      `${useRuntimeConfig().public.api}/order/create_order/`,
      {
        method: "POST",
        headers: {
          ...getAuthHeaders(),
          "Content-Type": "application/json",
        },
        body,
        credentials: "omit",
      },
    );
    return response;
  } catch (error) {
    console.error("Error in create_order API:", error);
    throw createError({
      statusCode: 400,
      statusMessage: "Error creating order, bad request",
    });
  }
});
