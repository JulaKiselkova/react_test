import {createAction} from "redux-actions";

export const USERS_REQUEST = createAction("USERS_REQUEST");
export const USERS_SUCCESS = createAction("USERS_SUCCESS");
export const USERS_FAIL = createAction("USERS_FAIL");