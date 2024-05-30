import express from "express";
import {
	createUser,
	deleteUser,
	getAllUser,
	getSingleUser,
	updateUser,
} from "../controllers/usersController.js";
import { profilePhoto } from "../utils/multer.js";

// Init Router
const router = express.Router();

// Create Routes
router.route("/").get(getAllUser).post(profilePhoto, createUser);
router
	.route("/:id")
	.delete(deleteUser)
	.put(updateUser)
	.patch(updateUser)
	.get(getSingleUser);

// Export Routes
export default router;
