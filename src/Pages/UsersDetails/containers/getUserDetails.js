import { useState, useCallback, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserByLoginRequest } from "../thunks/getUserByLogin";
import UsersDetailsView from "../components/Layout/index";
import CircularProgress from "@mui/material/CircularProgress";
import userDetailsReducer from "../reducers";

const UserDetailsContainer = () => {
  const { users } = useSelector((state) => state.usersPage);
  //const { certainUserInfo } = useSelector((state) => state.usersPage.ivey);
  const params = useParams();
  const { info, isLoading, errors } = useSelector(
    (state) => state.userDetailsPage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByLoginRequest(params.name));
  }, [params.name]);

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

  console.log(isFound());
  //console.log(certainUser());
  //console.log(certainUser().followers_url);

  return (
    <div>
      <UsersDetailsView
        users={users}
        params={params}
        certainUser={certainUser}
        isFound={isFound}
        isLoading={isLoading}
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
