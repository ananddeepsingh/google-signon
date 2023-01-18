//Types
import {
  CLEAR_MESSAGE,
  SET_MESSAGE
} from '../types';

const initialState = "";

const errorMessageReducer = (state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case SET_MESSAGE:
      return {
        ...state,
        errorMessageTxt: payload
      }
    case CLEAR_MESSAGE:
      return {
        ...state,
        errorMessageTxt: null
      }
    default:
      return state;

  }

}

export default errorMessageReducer;

