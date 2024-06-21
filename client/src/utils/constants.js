const BASE_URL = "http://localhost";
const PORT = ":3000";

export const LOGIN_API = `${BASE_URL}${PORT}/api/user`;

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};
