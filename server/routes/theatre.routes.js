import express from "express";
import { createTheatre } from "../controllers/theatre.controller.js";
import verifyToken from "../middlewares/authMiddleware.js";
import isAuthorised from "../middlewares/authorization.js";

const router = express.Router();

router.post("/", verifyToken, isAuthorised("ADMIN"), createTheatre);

export default router;
