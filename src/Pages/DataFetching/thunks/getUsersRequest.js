import { USERS_REQUEST, USERS_SUCCESS, USERS_FAIL } from "../actions";
import getData from "../api/api";

const getUserRequest = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(USERS_REQUEST());
      const response = await getData();
      dispatch(USERS_SUCCESS(response.data.results));
    } catch (error) {
      dispatch(USERS_FAIL(error.message));
    }
  };
};

export default getUserRequest;
