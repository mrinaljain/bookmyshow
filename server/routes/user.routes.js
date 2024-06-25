import express from "express";
import {
  getprofile,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import isLoggedIn from "../middlewares/authentication.js";
const route = express.Router();

route.post("/register", register);
route.post("/login", login);
route.get("/profile", getprofile);
route.get("/logout", isLoggedIn, logout);

export default route;
