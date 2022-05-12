import { useState, useCallback, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByLoginRequest } from "../thunks/getUserByLogin";
import UsersDetailsView from "../components/Layout/index";
import { getCertainUserInfo } from "../../MainScreen/api/api";
import { getUserInfoByLoginRequest } from "../thunks/getUserInfoByLogin";
import { HandleGetInfo } from "../../../functions/getInfo";
import UserServiceApi from "../../../service/index";
import CircularProgress from "@mui/material/CircularProgress";
import userDetailsReducer from "../reducers";
import axios from "axios";
import { data } from "../../../functions/getInfo";

const UserDetailsContainer = () => {
  const { users } = useSelector((state) => state.usersPage);
  const params = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.userDetailsPage);

  const rep = [];

  const { repos, isLoading, errors } = useSelector(
    (state) => state.userInfoDetailsPage
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByLoginRequest(params.name));
  }, [params.name]);

  const handleGoToRepository = useCallback((link) => {
    navigate(link);
  });
  //     dispatch(getUserInfoByLoginRequest(params.name, "repos"));
  //   }, [params.name]); //&&& чё ты ваще делаешь?
  //console.log(certainUser().followers_url);

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

  useEffect(() => {
    dispatch(getUserInfoByLoginRequest(certainUser().login, "repos"));
  }, []);

  return (
    <div>
      <UsersDetailsView
        users={users}
        params={params}
        certainUser={certainUser}
        isFound={isFound}
        isLoading={isLoading}
        //repositoriesObj={repositoriesObj}
        handleGoToRepository={handleGoToRepository}
        repos={repos}
      />
    </div>
  );
  //   if (isFound()) {
  //     //console.log(certainUser());
  //     console.log(isFound());
  //     return (
  //       <div>
  //         {isLoading ? (
  //           <CircularProgress />
  //         ) : (
  //           <>
  //             Details<div>{params.name}</div>
  //             <img src={certainUser().avatar_url}></img>
  //             {/* <>Details of {info.login}</> */}
  //             {/* {isFound()} */}
  //             <div>{errors && <div style={{ color: "red" }}>{errors}</div>}</div>
  //           </>
  //         )}
  //       </div>
  //     );
  //   } else {
  //     console.log(isFound());
  //     return (
  //       <div>
  //         Not found {params.name}
  //         <div>{errors && <div style={{ color: "red" }}>{errors}</div>}</div>
  //       </div>
  //     );
  //   }
};

export default UserDetailsContainer;
