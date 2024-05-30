import express from "express";
import {
	accountActivationbyOTP,
	changePassword,
	getLoggedInUser,
	profilePhotoUpdate,
	registerUser,
	userLogin,
	userLogout,
} from "../controllers/authController.js";
import tokentVerify from "../middlewares/tokenVerify.js";
import { profilePhoto } from "../utils/multer.js";

// Init Router
const router = express.Router();

// Create Route
router.post("/register", registerUser);
router.post("/login", userLogin);
router.post("/account-activate-by-otp/:token", accountActivationbyOTP);
router.get("/me", tokentVerify, getLoggedInUser);
router.post("/logout", userLogout);
router.post("/change-password", tokentVerify, changePassword);
router.post("/profile-photo", profilePhoto, profilePhotoUpdate);

// Export Router
export default router;
