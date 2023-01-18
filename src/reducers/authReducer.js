import { LOGIN, LOGOUT } from "actions/types";

const initialState = {};

const authReducer = (state = initialState, action) => {

  const {
    type,
  } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        isUserValid: true
      }
    case LOGOUT:
      return {
        ...state,
        isUserValid: false
      }
    default:
      return state
  }

}

export default authReducer
