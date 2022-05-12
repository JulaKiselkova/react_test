import api from "../../../api/config";
import axios from "axios";
//const BASE_URL = "https://pokeapi.co/api/v2/";

//const BASE_URL = "https://api.github.com/";

export const getUsers = (data) => {
  return api.get("users");
};

export const getCertainUserInfo = (login, info) => {
  return api.get(`users/${login}/${info}`);
};
