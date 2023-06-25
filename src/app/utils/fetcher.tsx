const fetcher = async <T,>(...args: Parameters<typeof fetch>): Promise<T> => {
  const res = await fetch(...args);
  const data = await res.json();
  return data as T;
};

export const BASE_URL = "https://frontend-test-assignment-api.abz.agency";

export default fetcher;
