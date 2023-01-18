// Service
import { GetFactsService } from '../services/getFactsService';

//Types
import {
  GET_FACTS_SUCCESS,
  SET_MESSAGE
} from '../types';

export const getFactsAction = (number) => async (dispatch) => {
  const { response, error } = await GetFactsService(number);

  if (error) {
    const message = error?.message?.data?.message || error?.message || error?.toString() || "Something went wrong";

    dispatch({
      type: SET_MESSAGE,
      payload: message
    });

    return {
      response: null,
      error: message
    };
  }

  return dispatch({
    type: GET_FACTS_SUCCESS,
    payload: response
  });
}
