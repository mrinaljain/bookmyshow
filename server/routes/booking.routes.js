import express from "express";
import { booking } from "../controllers/booking.controller.js";

const bookingRouter = express.Router();

bookingRouter.post("/", booking);

export default bookingRouter;
