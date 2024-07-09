import express from "express";
import { createShow, listShows } from "../controllers/show.controller.js";
import verifyToken from "../middlewares/authMiddleware.js";
import isAuthorised from "../middlewares/authorization.js";

const router = express.Router();

router.post("/", verifyToken, isAuthorised("ADMIN"), createShow);
router.get("/list", listShows);

export default router;


