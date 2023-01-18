import { SHOW_USER_DETAILS } from "./types";

export const showUserDetailsAction = (userDetails) => ({
  type: SHOW_USER_DETAILS,
  payload: userDetails
})
