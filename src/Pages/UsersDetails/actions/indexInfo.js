import { createAction } from "redux-actions";

export const GET_USER_INFO_BY_LOGIN_REQUEST = createAction(
  "GET_USER_INFO_BY_LOGIN_REQUEST"
);
export const GET_USER_INFO_BY_LOGIN_SUCCESS = createAction(
  "GET_USER_INFO_BY_LOGIN__SUCCESS"
);
export const GET_USER_INFO_BY_LOGIN_FAIL = createAction("GET_USER_INFO_BY_LOGIN_FAIL");
