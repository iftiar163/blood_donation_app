import express from "express";
import {
  accountActivationbyOTP,
  registerUser,
} from "../controllers/authController.js";

// Init Router
const router = express.Router();

// Create Route
router.post("/register", registerUser);
router.post("/account-activate-by-otp/:token", accountActivationbyOTP);

// Export Router
export default router;
