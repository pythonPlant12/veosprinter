export const getAuthHeaders = () => {
  const config = useRuntimeConfig();
  const base64Credentials = btoa(`${config.apiUsername}:${config.apiPassword}`);

  return {
    Authorization: `Basic ${base64Credentials}`,
  };
};
