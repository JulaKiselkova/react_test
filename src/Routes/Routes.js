import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES, DATA_FETCHING, USER_DETAILS } from "./routeNames";
import MainScreenContainer from "../Pages/MainScreen/containers/MainScreenContainer";
import UserDetailsContainer from "../Pages/UsersDetails/containers/getUserDetails";
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
    </Routes>
  );
};
