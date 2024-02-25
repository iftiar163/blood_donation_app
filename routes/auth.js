import express from "express";
import {
  accountActivationbyOTP,
  getLoggedInUser,
  registerUser,
  userLogin,
  userLogout,
} from "../controllers/authController.js";
import tokentVerify from "../middlewares/tokenVerify.js";

// Init Router
const router = express.Router();

// Create Route
router.post("/register", registerUser);
router.post("/login", userLogin);
router.post("/account-activate-by-otp/:token", accountActivationbyOTP);
router.get("/me", tokentVerify, getLoggedInUser);
router.post("/logout", userLogout);

// Export Router
export default router;
