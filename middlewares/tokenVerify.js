import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { isEmail, isMobile } from "../helpers/helpers.js";
import User from "../models/User.js";

// Create Token Verify Middleware
const tokentVerify = (req, res, next) => {
  // Get Server Token
  const accessToken = req.cookies.accessToken;

  //   check token
  if (!accessToken) {
    return res.status(400).json({ message: "Unauthorized User" });
  }

  //   Verify Token
  jwt.verify(
    accessToken,
    process.env.USER_LOGIN_KEY,
    asyncHandler(async (error, decode) => {
      if (error) {
        return res.status(400).json({ message: "Invalid Token" });
      }

      // Get User Data
      let me = null;

      if (isEmail(decode.auth)) {
        me = await User.findOne({ email: decode.auth }).select("-password");
      } else if (isMobile(decode.auth)) {
        me = await User.findOne({ phone: decode.auth }).select("-password");
      } else {
        return res.status(400).json({ message: "Invalid Authentication" });
      }

      req.loginuser = me;
      next();
    })
  );
};

// Export Default
export default tokentVerify;
