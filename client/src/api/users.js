import { LOGIN_API, SIGNUP_API, USER_PROFILE } from "../utils/constants.js";
import axiosInstance from "./index.js";

export const LoginUser = async (value) => {
  try {
    const response = axiosInstance.post(LOGIN_API, value);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const RegisterUser = async (value) => {
  try {
    const response = axiosInstance.post(SIGNUP_API, value);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const UserProfile = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = axiosInstance.get(USER_PROFILE, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
