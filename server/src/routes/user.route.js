const express = require("express");
const userRouter = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserById,
  updateUserDetails
} = require("../controllers/user.controller.js");

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);
userRouter.get('/getById/:id',getUserById)
userRouter.put("/users/:id", updateUserDetails);

module.exports = userRouter;
