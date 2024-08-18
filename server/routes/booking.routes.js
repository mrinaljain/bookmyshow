import express from "express";
import { booking, paymentstatus } from "../controllers/booking.controller.js";

const bookingRouter = express.Router();

bookingRouter.post("/", booking);
bookingRouter.post("/paymentstatus", paymentstatus);

export default bookingRouter;
