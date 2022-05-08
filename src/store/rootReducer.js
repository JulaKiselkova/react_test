import { combineReducers } from "redux";
import usersManagerReducer from "../Pages/MainScreen/reducers/index";
import usersFetchingManagerReducer from "../Pages/DataFetching/reducers";
import userDetailsReducer from "../Pages/UsersDetails/reducers";
//import { composeWithDevTools } from "redux-dev-tools";

//import toDoManagerReducer from "../pages/ReduxToDoManager/reducers/index";

//export const rootReducer = combineReducers({ toDoManager: toDoManagerReducer });
export const rootReducer = combineReducers({
  usersPage: usersManagerReducer,
  users: usersFetchingManagerReducer,
  userDetailsPage: userDetailsReducer
});
