import { useState, useCallback, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByLoginRequest } from "../thunks/getUserByLogin";
import UsersDetailsView from "../components/Layout/index";
import { getUserInfoByLoginRequest } from "../thunks/getUserInfoByLogin";
import { getUserFollowersByLoginRequest } from "../thunks/getUserInfoByLogin";
import { getUserFollowingByLoginRequest } from "../thunks/getUserInfoByLogin";

import React from "react";

const UserDetailsContainer = () => {
  const { repos, followers, following, isLoading, errors } = useSelector(
    (state) => state.userInfoDetailsPage
  );

  const { info } = useSelector((state) => state.userDetailsPage);
  const { users } = useSelector((state) => state.usersPage);
  const params = useParams();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(4);
  const lastItemIndex = currentPage * perPage;
  const firstItemIndex = lastItemIndex - perPage;
  const currentItems = repos.slice(firstItemIndex, lastItemIndex);
  const numberOfPages = Math.ceil(repos.length / perPage);

  const paginate = useCallback((event, pageNumber) => {
    setCurrentPage(pageNumber);
  });

  const isEmpty = useCallback(() => {
    if (repos === []) {
      return true;
    } else {
      return false;
    }
  });

  const certainUser = useCallback(() => {
    return users.find((user) => user.login === params.name);
  });

  useEffect(() => {
    dispatch(getUserByLoginRequest(params.name));
    dispatch(getUserInfoByLoginRequest(certainUser().login, "repos"));
    dispatch(getUserFollowersByLoginRequest(certainUser().login));
    dispatch(getUserFollowingByLoginRequest(certainUser().login));
  }, [params.name]);

  const html_url = certainUser().html_url;
  const numberOfRepos = repos.length;

  const usersLogin = () => {
    return users.map((user) => {
      return user.login;
    });
  };

  const isFound = useCallback(() => {
    if (certainUser() === undefined) {
      return false;
    } else {
      return true;
    }
  });

  const open = useCallback((link) => {
    window.open(link);
  });

  const numberOfFollowers = followers.length;
  const numberOfFollowing = following.length;
  const name = certainUser().name;

  useEffect(() => {
    dispatch(getUserInfoByLoginRequest(certainUser().login, "repos"));
    dispatch(getUserFollowersByLoginRequest(certainUser().login));
    dispatch(getUserFollowingByLoginRequest(certainUser().login));
  }, []);

  return (
    <div>
      <UsersDetailsView
        users={users}
        params={params}
        certainUser={certainUser}
        isFound={isFound}
        isLoading={isLoading}
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
};

export default memo(UserDetailsContainer);
