const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');
const ErrorHandler = require('../utils/errorHandler.js');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler.js');

exports.isAuthenticatedUser = asyncErrorHandler(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Please login to access", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
});