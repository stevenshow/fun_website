import axios from "axios";

const api = axios.create({ baseURL: "https://api.devsteve.net/" });

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
