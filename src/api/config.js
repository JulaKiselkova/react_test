import axios from "axios";

const apiConfig = {
  baseURL: "https://api.github.com/",
  //baseURL: "https://pokeapi.co/api/v2/",
};

const api = axios.create(apiConfig);
export default api;
