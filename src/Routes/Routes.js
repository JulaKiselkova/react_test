import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES, DATA_FETCHING, USER_DETAILS } from "./routeNames";
import MainScreenContainer from "../Pages/MainScreen/containers/MainScreenContainer";
import UserDetailsContainer from "../Pages/UsersDetails/containers/getUserDetails";
import FullDetailsContainer from "../Pages/UsersDetails/containers/fullDetailsContainer";
//import UserDetailsContainer from "../Pages/UsersDetails/containers/getUserDetails"

import Async from "../Pages/DataFetching/containers/dataContainer";
export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<MainScreenContainer />} />
      <Route path={ROUTE_NAMES.DATA_FETCHING} element={<Async />} />
      <Route
        path={ROUTE_NAMES.USER_DETAILS}
        element={<UserDetailsContainer />}
      />
      {/* <Route
        path={ROUTE_NAMES.USER_DETAILS}
        element={<FullDetailsContainer />}
      /> */}
      <Route path={ROUTE_NAMES.USER_DETAILS} element={<>Hello</>} />
      {/* <Route path={"localhost:3000/mojombo"} element={<>Hello1</>} /> */}
      {/* <Route path={ROUTE_NAMES.REPO} element={<div>Hello</div>}/> */}
    </Routes>
  );
};
