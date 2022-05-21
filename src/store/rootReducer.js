import { combineReducers } from "redux";
import usersManagerReducer from "../Pages/MainScreen/reducers/index";
import userDetailsReducer from "../Pages/UsersDetails/reducers";
import userDetailsInfoReducer from "../Pages/UsersDetails/reducers/indexInfo";

export const rootReducer = combineReducers({
  usersPage: usersManagerReducer,
  userDetailsPage: userDetailsReducer,
  userInfoDetailsPage: userDetailsInfoReducer,
});
