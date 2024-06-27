const BASE_URL = "http://localhost";
const PORT = ":3002";

export const LOGIN_API = `${BASE_URL}${PORT}/api/user/login`;
export const SIGNUP_API = `${BASE_URL}${PORT}/api/user/register`;
export const USER_PROFILE = `${BASE_URL}${PORT}/api/user/profile`;
export const LOGOUT = `${BASE_URL}${PORT}/api/user/logout`;
export const ADD_MOVIE = `${BASE_URL}${PORT}/api/movie/`;
export const MOVIES_LIST = `${BASE_URL}${PORT}/api/movie/list`;

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};