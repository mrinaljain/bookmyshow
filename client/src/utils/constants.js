const BASE_URL = process.env.BASE_URL || "https://bms-api-dmgc.onrender.com";

export const LOGIN_API = `${BASE_URL}/api/user/login`;
export const SIGNUP_API = `${BASE_URL}/api/user/register`;
export const USER_PROFILE = `${BASE_URL}/api/user/profile`;
export const LOGOUT = `${BASE_URL}/api/user/logout`;
export const VERIFY_USER = `${BASE_URL}/api/user/verifyUser`;
export const ADD_MOVIE = `${BASE_URL}/api/movie/`;
export const MOVIES_LIST = `${BASE_URL}/api/movie/list`;
export const MOVIE_DETAIL = `${BASE_URL}/api/movie/`;
export const DELETE_MOVIE = `${BASE_URL}/api/movie/`;
export const SHOWS_LIST = `${BASE_URL}/api/show/list`;
export const SHOW_DETAIL = `${BASE_URL}/api/show/`;

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};
