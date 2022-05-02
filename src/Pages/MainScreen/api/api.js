import api from "../../../api/config";
import axios from "axios";
//const BASE_URL = "https://pokeapi.co/api/v2/";

//const BASE_URL = "https://api.github.com/";

export const getUsers = (data) => {
  //     const getData = () => {
  //     axios.get(BASE_URL).then(function (response) {
  //       //console.log(response.data);
  //       return response.data;
  //     });
  //     //console.log(getData());
  //     return getData();
  // }
  return api.get("users");
  //return api.get("pokemon");
  //return fetch(BASE_URL).then((response) => response.json())
};
