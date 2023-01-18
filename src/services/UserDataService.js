import { GET_API } from "./api";

export const UserDataService = async (params) => {
  const {
    per_page = 3,
    page = 1
  } = params;

  const { response, error } = await GET_API(`users?page=${page}&per_page=${per_page}`);

  if (error) {
    return {
      response: null,
      error
    }
  }

  return {
    response,
    error: null
  }
}
