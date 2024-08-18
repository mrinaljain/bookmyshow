import express from "express";
import {
  createOrder,
  verifySignature,
} from "../controllers/payment.controller.js";

const paymentRouter = express.Router();

paymentRouter.get("", createOrder);

paymentRouter.get("/verify", verifySignature);

export default paymentRouter;
