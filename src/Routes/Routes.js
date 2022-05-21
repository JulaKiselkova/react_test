import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES, DATA_FETCHING, USER_DETAILS } from "./routeNames";
import MainScreenContainer from "../Pages/MainScreen/containers/MainScreenContainer";
import UserDetailsContainer from "../Pages/UsersDetails/containers/getUserDetails";
import FullDetailsContainer from "../Pages/UsersDetails/containers/fullDetailsContainer";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<MainScreenContainer />} />
      <Route
        path={ROUTE_NAMES.USER_DETAILS}
        element={<FullDetailsContainer />}
      />
      <Route path={ROUTE_NAMES.USER_DETAILS} element={<>Hello</>} />
    </Routes>
  );
};
