import { getErrorMessage } from "helper/Utils";
import { UserDataService } from "services/UserDataService";
import { SET_MESSAGE } from "types";

export const fetchUserDataAction = (params) => async (dispatch) => {

  const { response, error } = await UserDataService(params);

  if (error) {
    const message = getErrorMessage(error);

    dispatch({
      type: SET_MESSAGE,
      payload: message
    })

    return {
      response: null,
      error: message
    }
  }

  return {
    response,
    error: null
  }
}
