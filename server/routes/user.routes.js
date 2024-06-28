import express from "express";
import {
  getprofile,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import isLoggedIn from "../middlewares/authentication.js";
import verifyToken from "../middlewares/auth.js";
const route = express.Router();
//Route handelere
route.post("/register", register);
route.post("/login", login);
route.get("/profile", verifyToken, getprofile);
route.get("/logout", logout);

export default route;
