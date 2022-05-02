import { USERS_REQUEST, USERS_SUCCESS, USERS_FAIL } from "../actions";
//import { getUsers } from "../api/api";
import { UserServiceApi } from "../../../service/index";

const getUserRequest = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(USERS_REQUEST());
      //const response = await getUsers();
      const response = await UserServiceApi.getAll();
      dispatch(USERS_SUCCESS(response.data));
    } catch (error) {
      dispatch(USERS_FAIL(error.message));
    }
  };
};

export default getUserRequest;
