const jwt = require('jsonwebtoken')
const catchAsyncErrors = require('../middleware/catchAsyncError')
const ErrorHandler = require('../utils/ErrorHandler')

 isAuthorizedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token)
        return next(
            new ErrorHandler("Please login to access the resource", 500)
        );
    const { id,UserType } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.id = id;
    req.UserType = UserType; 
    next();
});

module.exports = isAuthorizedUser;