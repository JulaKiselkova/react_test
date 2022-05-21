import { useState, useCallback, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByLoginRequest } from "../thunks/getUserByLogin";
import UsersDetailsView from "../components/Layout/index";
import { getCertainUserInfo } from "../../MainScreen/api/api";
import { getUserInfoByLoginRequest } from "../thunks/getUserInfoByLogin";
import { getUserFollowersByLoginRequest } from "../thunks/getUserInfoByLogin";
import { getUserFollowingByLoginRequest } from "../thunks/getUserInfoByLogin";
import { HandleGetInfo } from "../../../functions/getInfo";
import UserServiceApi from "../../../service/index";
import CircularProgress from "@mui/material/CircularProgress";
import userDetailsReducer from "../reducers";
import axios from "axios";
import { browserHistory } from "react-router";
import Paginate from "../../../hooks/paginate";

import React from "react";
import { data } from "../../../functions/getInfo";

const UserDetailsContainer = () => {
  const { repos, followers, following, isLoading, errors } = useSelector(
    (state) => state.userInfoDetailsPage
  );

  const { info } = useSelector((state) => state.userDetailsPage);
  console.log(info);
  const { users } = useSelector((state) => state.usersPage);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(4);
  //const [lastItemIndex, setLastItemIndex] = useState(0);
  //const [firstItemIndex, setFirstItemIndex] = useState(perPage - 1);
  const lastItemIndex = currentPage * perPage;
  const firstItemIndex = lastItemIndex - perPage;
  const currentItems = repos.slice(firstItemIndex, lastItemIndex);
  const numberOfPages = Math.ceil(repos.length / perPage);
  console.log(numberOfPages);
  console.log(users);
  const paginate = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //   const handleChangePaginate = (event, value) => {
  //     setPage(value);
  //   };
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [perPage] = useState(4);

  //const lastItemIndex = currentPage * perPage;
  //const firstItemIndex = lastItemIndex - perPage;
  //const current = repos.splice(firstItemIndex, lastItemIndex);
  const isEmpty = () => {
    if (repos === []) {
      return true;
    } else {
      return false;
    }
  };

  const certainUser = () => {
    return users.find((user) => user.login === params.name);
  };
  useEffect(() => {
    dispatch(getUserByLoginRequest(params.name));
    dispatch(getUserInfoByLoginRequest(certainUser().login, "repos"));
    dispatch(getUserFollowersByLoginRequest(certainUser().login));
    dispatch(getUserFollowingByLoginRequest(certainUser().login));
  }, [params.name]);

  //   console.log("paramsName");
  console.log(repos);
  //   console.log(isLoading);

  //console.log(certainUser());

  //const html_url = "";
  const html_url = certainUser().html_url;
  //const numberOfRepos = repos.length;
  const numberOfRepos = repos.length;

  const usersLogin = () => {
    return users.map((user) => {
      return user.login;
    });
  };
  //   console.log("userss");
  //   console.log(usersLogin());

  const isFound = () => {
    if (certainUser() === undefined) {
      return false;
    } else {
      return true;
    }
  };

  const open = (link) => {
    window.open(link);
  };
  //console.log("isFound");
  //console.log(isFound());
  console.log(followers);
  const numberOfFollowers = followers.length;
  const numberOfFollowing = following.length;
  const name = certainUser().name;
  console.log(certainUser());
  console.log(users[0]);

  useEffect(() => {
    //if (isFound()) {
    dispatch(getUserInfoByLoginRequest(certainUser().login, "repos"));
    dispatch(getUserFollowersByLoginRequest(certainUser().login));
    dispatch(getUserFollowingByLoginRequest(certainUser().login));
    //}
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
        //handleGoToRepository={handleGoToRepository}
        repos={repos}
        isEmpty={isEmpty}
        html_url={html_url}
        numberOfRepos={numberOfRepos}
        numberOfFollowers={numberOfFollowers}
        numberOfFollowing={numberOfFollowing}
        open={open}
        currentItems={currentItems}
        paginate={paginate}
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        name={name}
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
