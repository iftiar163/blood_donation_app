import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import {
  createOTP,
  isEmail,
  isMobile,
  tokenDecode,
} from "../helpers/helpers.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { sendSMS } from "../utils/sendSMS.js";
import { AccountActivationEmail } from "../mails/AccountActivationMail.js";

/**
 * @description Register User
 * @method POST
 * @route api/v1/auth/register
 * @access public
 */

export const registerUser = asyncHandler(async (req, res) => {
  // Get data from Form
  const { name, auth, password } = req.body;

  //   Create OTP
  const otp = createOTP();

  //   Form Validation
  if (!name || !auth || !password) {
    res.status(400).json({ message: "All Fields Are Required" });
  }

  //   Check email or Phone number
  let authEmail = "";
  let authMobile = "";

  // check valid email address

  if (isEmail(auth)) {
    authEmail = auth;

    // Check Duplicate Email
    const checkEmail = await User.findOne({ email: auth });
    if (checkEmail) {
      return res.status(200).json({ message: "Email Alreadt Exists" });
    }
  } else if (isMobile(auth)) {
    authMobile = auth;

    // Check Duplicate Mobile
    const checkMobile = await User.findOne({ phone: auth });
    if (checkMobile) {
      return res.status(400).json({ message: "Phone Already Exists" });
    }
  } else {
    res.status(400).json({ message: "Use A valid Phone or Email Address" });
  }

  //   Hash Password
  const passEncrypt = await bcrypt.hash(password, 10);

  //   User Registration Data Create
  const user = await User.create({
    name,
    email: authEmail,
    phone: authMobile,
    password: passEncrypt,
    accessToken: otp,
  });

  //   WebToken
  if (user) {
    // Send Token to Cookie
    const activationToken = jwt.sign({ auth }, process.env.SECRET_KEY, {
      expiresIn: "30min",
    });

    res.cookie("activationToken", activationToken);

    if (authEmail) {
      // Send Email Varification
      await AccountActivationEmail(auth, { code: otp, link: "" });
    } else if (authMobile) {
      // Send OTP
      await sendSMS(auth, `Your account activation Code is ${otp}`);
    }
  }

  //   Response
  res.status(201).json({ user, message: "User Data Created Successfully" });
});

/**
 * @description User Activation OTP
 * @method GET
 * @route api/v1/auth/account-activate-by-otp/:token
 * @access public
 */

export const accountActivationbyOTP = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const { otp } = req.body;

  // Token Decode
  const activationToken = tokenDecode(token);

  //   Video 1.16.10
  // Verify Token
  const verifyTokent = jwt.verify(activationToken, process.env.SECRET_KEY);

  if (!verifyTokent) {
    return res.status(400).json({ message: "Invalid Token" });
  }

  // Activate User Verify
  let activeUser = null;

  if (isEmail(verifyTokent.auth)) {
    activeUser = await User.findOne({ email: verifyTokent.auth });

    if (!activeUser) {
      return res.status(400).json({ message: "Invalid Email Address" });
    }
  } else if (isMobile(verifyTokent.auth)) {
    activeUser = await User.findOne({ phone: verifyTokent.auth });

    if (!activeUser) {
      return res.status(400).json({ message: "Invalid Phone Number" });
    }
  } else {
    return res.status(400).json({ message: "Invalid User Information" });
  }

  // Check OTP
  if (otp !== activeUser.accessToken) {
    return res.status(400).json({ message: "OTP Doesn't Match" });
  }

  // Update activate User Data
  activeUser.isActive = true;
  activeUser.accessToken = null;
  activeUser.save();

  // Clear Cookie
  res.clearCookie("activationToken");
  //   Response
  res.status(200).json({ message: "User Activation Successfull" });
});
