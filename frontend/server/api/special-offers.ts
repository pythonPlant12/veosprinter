export default defineEventHandler(async () => {
  try {
    const response = await $fetch(
      `${useRuntimeConfig().public.api}/special-offers/`,
    );
    return response;
  } catch (error) {
    console.error("Error in special_offers API:", error);
    throw createError({
      statusCode: 400,
      statusMessage: "Error getting special offers, bad request",
    });
  }
});
