import axios from "axios";

const api = axios.create({ baseURL: "https://136.36.11.84:3000/" });

export const useAPI = () => {
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      throw error;
    }
  );
  return api;
};
