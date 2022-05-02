import {
  GET_USER_BY_LOGIN_REQUEST,
  GET_USER_BY_LOGIN_SUCCESS,
  GET_USER_BY_LOGIN_FAIL,
} from "../actions";
import { UserServiceApi } from "../../../service/index";
export const getUserByLoginRequest = (login) => {
  return async (dispatch) => {
    try {
      dispatch(GET_USER_BY_LOGIN_REQUEST);
      const response = await UserServiceApi.getByLogin(login);
      dispatch(GET_USER_BY_LOGIN_SUCCESS(response.data));
    } catch (error) {
        dispatch(GET_USER_BY_LOGIN_FAIL(error.message));
    }
  };
};
