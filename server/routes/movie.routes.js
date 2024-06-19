import express from "express";
import { createMovie, getMovies } from "../controllers/movie.controller.js";
import isLoggedIn from "../middlewares/authentication.js";

const router = express.Router();

router.post("/", isLoggedIn, createMovie);
router.get("/list", getMovies);

export default router;