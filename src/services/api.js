import {
  authHeader,
  handleError,
  validateStatusCode
} from "../utils/api.helper"

const BASE_URL = "https://reqres.in/api/";

export const GET_API = (url) => {
  console.log(`${BASE_URL}${url}`)
  return fetch(`${BASE_URL}${url}`)
    // .then((res) => validateStatusCode(res))
    .then((res) => res.json())
    .then((response) => {
      console.log(response, "response")
      return {
        response,
        error: null
      }
    })
    .catch((error) => handleError(error))
}
