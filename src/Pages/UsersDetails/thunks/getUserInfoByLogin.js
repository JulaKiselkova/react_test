import {
  GET_USER_INFO_BY_LOGIN_REQUEST,
  GET_USER_INFO_BY_LOGIN_SUCCESS,
  GET_USER_INFO_BY_LOGIN_FAIL,
} from "../actions/indexInfo";
import { UserServiceApi } from "../../../service/index";
export const getUserInfoByLoginRequest = (login, info) => {
  return async (dispatch) => {
    try {
      dispatch(GET_USER_INFO_BY_LOGIN_REQUEST);
      const response = await UserServiceApi.getInfoByLogin(login, info);
      dispatch(GET_USER_INFO_BY_LOGIN_SUCCESS(response.data));
    } catch (error) {
      dispatch(GET_USER_INFO_BY_LOGIN_FAIL(error.message));
    }
  };
};
