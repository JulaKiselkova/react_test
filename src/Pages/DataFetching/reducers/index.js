import * as actions from "../actions";

import { v4 as uuid } from "uuid";
import { handleActions } from "redux-actions";

const defaultState = {
  isLoading: false,
  users: [],
  errors: null,
};

const usersFetchingManagerReducer = handleActions(
  {
    [actions.USERS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.USERS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      users: payload,
    }),
    [actions.USERS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),
  },
  defaultState
);

export default usersFetchingManagerReducer;
