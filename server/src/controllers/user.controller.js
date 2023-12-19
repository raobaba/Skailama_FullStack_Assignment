const User = require("../models/user.model");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const sendToken = require("../utils/sendToken");
const ErrorHandler = require("../utils/errorHandler");
const cloudinary = require("cloudinary");

const registerUser = asyncErrorHandler(async (req, res, next) => {
    const { username, email, gender, password } = req.body;

    const myCloud = await cloudinary.uploader.upload(req.files.avatar.tempFilePath, {
        folder: "avatars",
        width: 150,
        crop: "scale",
    });

    const user = await User.create({
        username, 
        email,
        gender,
        password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        },
    });

    sendToken(user, 200, res);
});

const loginUser = asyncErrorHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email And Password", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    sendToken(user, 201, res);
});

const logoutUser = asyncErrorHandler(async (req, res, next) => {
    res.clearCookie("token"); 
    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
});

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};
