import axios from "axios";

const apiConfig = {
  baseURL: "https://api.github.com/",
};

const api = axios.create(apiConfig);
export default api;
