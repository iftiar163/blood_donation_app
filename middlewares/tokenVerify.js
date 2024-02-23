import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

// Create Token Verify Middleware
const tokentVerify = (req, res, next) => {
  // Get Server Token
  const accessToken = res.cookies.accessToken;

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
      console.log(decode);
      //   1:15min
    })
  );
};

// Export Default
export default tokentVerify;
