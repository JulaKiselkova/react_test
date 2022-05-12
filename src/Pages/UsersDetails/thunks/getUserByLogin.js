import {
  GET_USER_BY_LOGIN_REQUEST,
  GET_USER_BY_LOGIN_SUCCESS,
  GET_USER_BY_LOGIN_FAIL,
} from "../actions/index";
import { UserServiceApi } from "../../../service/index";
export const getUserByLoginRequest = (login) => {
  return async (dispatch) => {
    try {
      dispatch(GET_USER_BY_LOGIN_REQUEST);
      const response = await UserServiceApi.getByLogin(login);
      //const responseInfo = await UserServiceApi.getInfoByLogin
      //dispatch(GET_USER_BY_LOGIN_SUCCESS([response.data]));
      dispatch(GET_USER_BY_LOGIN_SUCCESS(response.data));
    } catch (error) {
      dispatch(GET_USER_BY_LOGIN_FAIL(error.message));
    }
  };
};
