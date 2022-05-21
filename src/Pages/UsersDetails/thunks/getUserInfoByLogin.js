import {
  GET_USER_INFO_BY_LOGIN_REQUEST,
  GET_USER_INFO_BY_LOGIN_SUCCESS,
  GET_USER_INFO_BY_LOGIN_FAIL,
  GET_FOLLOWERS_BY_LOGIN_REQUEST,
  GET_FOLLOWERS_BY_LOGIN_SUCCESS,
  GET_FOLLOWERS_BY_LOGIN_FAIL,
  GET_FOLLOWING_BY_LOGIN_REQUEST,
  GET_FOLLOWING_BY_LOGIN_SUCCESS,
  GET_FOLLOWING_BY_LOGIN_FAIL,
} from "../actions/indexInfo";
import { UserServiceApi } from "../../../service/index";
export const getUserInfoByLoginRequest = (login, info, page) => {
  return async (dispatch) => {
    try {
      dispatch(GET_USER_INFO_BY_LOGIN_REQUEST);
      const response = await UserServiceApi.getInfoByLogin(login, info, page);
      dispatch(GET_USER_INFO_BY_LOGIN_SUCCESS(response.data));
    } catch (error) {
      dispatch(GET_USER_INFO_BY_LOGIN_FAIL(error.message));
    }
  };
};

export const getUserFollowersByLoginRequest = (login) => {
  return async (dispatch) => {
    try {
      dispatch(GET_FOLLOWERS_BY_LOGIN_REQUEST);
      const response = await UserServiceApi.getInfoByLogin(login, "followers");
      dispatch(GET_FOLLOWERS_BY_LOGIN_SUCCESS(response.data));
    } catch (error) {
      dispatch(GET_FOLLOWERS_BY_LOGIN_FAIL(error.message));
    }
  };
};

export const getUserFollowingByLoginRequest = (login) => {
  return async (dispatch) => {
    try {
      dispatch(GET_FOLLOWING_BY_LOGIN_REQUEST);
      const response = await UserServiceApi.getInfoByLogin(login, "following");
      dispatch(GET_FOLLOWING_BY_LOGIN_SUCCESS(response.data));
    } catch (error) {
      dispatch(GET_FOLLOWING_BY_LOGIN_FAIL(error.message));
    }
  };
};
