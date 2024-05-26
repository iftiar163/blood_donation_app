import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import mongodbConnections from "./config/mongodb.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Initialiazation
const app = express();
dotenv.config();

// Env Variables
const PORT = process.env.PORT || 9090;

// Set Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

// Static Folder
app.use(express.static("public"));

// Routes
app.use("/api/v1/user/", userRouter);
app.use("/api/v1/auth/", authRouter);

// Server Init
app.listen(PORT, () => {
	console.log(`Server is Running On PORT ${PORT}`.bgGreen.black);
	mongodbConnections();
});
