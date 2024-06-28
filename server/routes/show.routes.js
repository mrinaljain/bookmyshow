import express from "express";
import { createShow, listShows } from "../controllers/show.controller.js";

const router = express.Router();

router.post("/", createShow);
router.get("/list", listShows);

export default router;


