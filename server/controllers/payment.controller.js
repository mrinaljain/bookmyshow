import { generateOrder, verify } from "../services/payment.service.js";

export const createOrder = (req, res) => {
  generateOrder();
  res.status(200).json({ status: "200" });
};

export const verifySignature = (req, res) => {
  verify();
};
