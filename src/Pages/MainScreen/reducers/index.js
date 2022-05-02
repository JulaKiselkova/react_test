import * as actions from "../actions";

import { v4 as uuid } from "uuid";
import { handleActions } from "redux-actions";

const defaultState = {
  isLoading: false,
  users: [],
  errors: null,
};

const usersManagerReducer = handleActions(
  {
    [actions.USERS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.USERS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      //users: [...state]
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

export default usersManagerReducer;
//export default usersReducer;

// const toDoManagerReducer = handleActions(
//   {
//     [actions.CREATE_TODO]: (state) => {
//       const newTodo = { id: uuid(), toDoValue: 0 };
//       return { toDos: [...state.todos, newTodo] };
//     },
//   },
//   initialState
// );
