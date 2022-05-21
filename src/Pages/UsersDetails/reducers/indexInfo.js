import * as actions from "../actions/indexInfo";
import { handleActions } from "redux-actions";

const defaultState = {
  isLoading: false,
  repos: [{ name: "", id: 0, url: "", clone_url: "" }],
  followers: [],
  following: [],
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
      repos: payload,
    }),
    [actions.GET_USER_INFO_BY_LOGIN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),

    [actions.GET_FOLLOWERS_BY_LOGIN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_FOLLOWERS_BY_LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      followers: payload,
    }),
    [actions.GET_FOLLOWERS_BY_LOGIN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),

    [actions.GET_FOLLOWING_BY_LOGIN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_FOLLOWING_BY_LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      following: payload,
    }),
    [actions.GET_FOLLOWING_BY_LOGIN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),
  },
  defaultState
);

// export const userFollowersReducer = handleActions(
//   {
//     [actions.GET_FOLLOWERS_BY_LOGIN_REQUEST]: (state) => ({
//       ...state,
//       isLoading: true,
//     }),
//     [actions.GET_FOLLOWERS_BY_LOGIN_SUCCESS]: (state, { payload }) => ({
//       ...state,
//       isLoading: false,
//       followers: payload,
//     }),
//     [actions.GET_FOLLOWERS_BY_LOGIN_FAIL]: (state, { payload }) => ({
//       ...state,
//       isLoading: false,
//       errors: payload,
//     }),
//   },
//   defaultState
// );
export default userDetailsInfoReducer;
