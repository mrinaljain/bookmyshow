import express from "express";
import { renderTemplate, submitForm } from "../controllers/ejs.controller.js";

const ejsRouter = express.Router();

ejsRouter.get("/", renderTemplate);
ejsRouter.post("/submit", submitForm);

export default ejsRouter;
