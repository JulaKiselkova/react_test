import { useState, useCallback, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByLoginRequest } from "../thunks/getUserByLogin";

import FullDetailsView from "../components/Layout/fullDetailsView";

import React from "react";

const FullDetailsContainer = () => {
  const { isLoading } = useSelector((state) => state.userInfoDetailsPage);
  const { users } = useSelector((state) => state.usersPage);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByLoginRequest(params.name));
  }, [params.name]);

  const certainUser = useCallback(() => {
    return users.find((user) => user.login === params.name);
  });

  const isFound = useCallback(() => {
    if (certainUser() === undefined) {
      return false;
    } else {
      return true;
    }
  });

  return (
    <div>
      <FullDetailsView isFound={isFound} isLoading={isLoading} />
    </div>
  );
};

export default memo(FullDetailsContainer);
