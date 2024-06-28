import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovieDetail,
  getMovies,
  updateMovie,
} from "../controllers/movie.controller.js";
import isAuthorised from "../middlewares/authorization.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, isAuthorised("ADMIN"), createMovie);
router.get("/list", getMovies);
router.get("/:movieId", getMovieDetail);
router.patch("/:movieId", updateMovie);
router.delete("/:movieId", deleteMovie);

export default router;
