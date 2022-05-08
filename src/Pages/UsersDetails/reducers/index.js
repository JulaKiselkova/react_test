import * as actions from "../actions";
import { handleActions } from "redux-actions";

const defaultState = {
    isLoading: false,
    info: {},
    errors: null
};

const userDetailsReducer = handleActions(
  {
    [actions.GET_USER_BY_LOGIN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_USER_BY_LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      //users: [...state]
      info: payload,
    }),
    [actions.GET_USER_BY_LOGIN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),
  },
  defaultState
);

export default userDetailsReducer;