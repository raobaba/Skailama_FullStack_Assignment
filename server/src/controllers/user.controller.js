const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/sendToken");
const User = require("../models/user.model.js");
const cloudinary = require("cloudinary");
const asyncHandler = require('../middlewares/asyncHandler.middleware.js');

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const myCloud = await cloudinary.uploader.upload(req.files.avatar.tempFilePath, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });
  const user = await User.create({
    username,
    email,
    password,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });
  sendToken(user, 200, res);
});

const loginUser = asyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
     console.log("user",user)
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3600000,
        sameSite: "strict",
      });
  
      res.cookie("userId", user._id, {
        httpOnly: true,
        maxAge: 3600000,
        sameSite: "strict",
      });
  
      res.json({ status: 201, message: "Logged in successfully", user });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    expires: new Date(0),
    sameSite: "strict",
  });
  res.status(200).json({ status: 200, message: "Logged out successfully" });
});

module.exports = { registerUser, loginUser, logoutUser };
