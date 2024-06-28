import express from "express";
import { createMovie, getMovies } from "../controllers/movie.controller.js";
import isAuthorised from "../middlewares/authorization.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, isAuthorised("ADMIN"), createMovie);
router.get("/list", getMovies);

export default router;


//TODO: create authorization middleware