import express from "express";
import { createShow, listShows } from "../controllers/show.controller.js";
import isLoggedIn from "../middlewares/authentication.js";

const router = express.Router();

router.post("/", createShow);
router.get("/list", listShows);

export default router;

// TODO add admin authorozition here
// TODO add loginmiddleware
