const { SHOW_USER_DETAILS, CLEAR_USER_DETAILS } = require("actions/types");

const initialState = {};

const userDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_USER_DETAILS:
      return {
        ...state,
        userData: payload
      }
    case CLEAR_USER_DETAILS:
      return {
        ...state,
        userData: {}
      }
    default:
      return state
  }
}

export default userDetailsReducer;
