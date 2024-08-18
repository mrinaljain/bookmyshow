import express from "express";
import {
  createShow,
  listShows,
  showDetail,
} from "../controllers/show.controller.js";
import verifyToken from "../middlewares/authMiddleware.js";
import isAuthorised from "../middlewares/authorization.js";

const router = express.Router();

router.post("/", verifyToken, isAuthorised("ADMIN"), createShow);
router.get("/list", listShows);
router.get("/:showId", showDetail);

export default router;


