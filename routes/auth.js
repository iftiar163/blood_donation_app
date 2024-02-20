import express from "express";
import { registerUser } from "../controllers/authController.js";

// Init Router
const router = express.Router();

// Create Route
router.post("/register", registerUser);

// Export Router
export default router;
