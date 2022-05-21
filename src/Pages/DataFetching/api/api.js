import { useState, useCallback, memo, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.github.com/users";

const getData = () => {
  const data = axios.get(BASE_URL).then(function (response) {
    //console.log(response.data);
    return response.data;
  });
  //console.log(getData());
  return data;
};

export default memo(getData);
