import { getCertainUserInfo } from "../Pages/MainScreen/api/api";
import axios from "axios";

export let data = [];

//export const handleGetInfo = (user, info) => {
export const HandleGetInfo = (link) => {
  axios
    .get(link)
    .then(function (response) {
      data = [];
      data.push(response.data);
      //data = response.data;
      //return data;
      //console.log(response.data);
      //return response.data;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });

  //   const getInfoObj = (user, info) =>
  //     getInfo(user, info).then(function (result) {
  //       console.log("result");
  //       return console.log(result);
  //     });
  //   console.log("VIVOD");
  //   //console.log(getInfoObj(user, info));
  //   return getInfoObj(user, info);
};
