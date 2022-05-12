import * as actions from "../actions/indexInfo";
import { handleActions } from "redux-actions";

const defaultState = {
  isLoading: false,
  repos: [],
  errors: null,
};

const userDetailsInfoReducer = handleActions(
  {
    [actions.GET_USER_INFO_BY_LOGIN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_USER_INFO_BY_LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      //users: [...state]
      repos: payload,
    }),
    [actions.GET_USER_INFO_BY_LOGIN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),
  },
  defaultState
);

export default userDetailsInfoReducer;
