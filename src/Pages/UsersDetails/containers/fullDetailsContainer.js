import { useState, useCallback, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByLoginRequest } from "../thunks/getUserByLogin";
import UsersDetailsView from "../components/Layout/index";
import { getCertainUserInfo } from "../../MainScreen/api/api";
import { getUserInfoByLoginRequest } from "../thunks/getUserInfoByLogin";
import { getUserFollowersByLoginRequest } from "../thunks/getUserInfoByLogin";
import { HandleGetInfo } from "../../../functions/getInfo";
import UserServiceApi from "../../../service/index";
import CircularProgress from "@mui/material/CircularProgress";
import userDetailsReducer from "../reducers";
import axios from "axios";
import { browserHistory } from "react-router";
import FullDetailsView from "../components/Layout/fullDetailsView";

import React from "react";
import { data } from "../../../functions/getInfo";

const FullDetailsContainer = () => {
  const { users } = useSelector((state) => state.usersPage);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByLoginRequest(params.name));
  }, [params.name]);


  const certainUser = () => {
    return users.find((user) => user.login === params.name);
  };

  const isFound = () => {
    if (certainUser() === undefined) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <FullDetailsView isFound={isFound} />
    </div>
  );
};

export default FullDetailsContainer;
