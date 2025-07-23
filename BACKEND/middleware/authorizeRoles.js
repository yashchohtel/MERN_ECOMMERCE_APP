import ErrorHandler from "../utils/errorHandler.js"; // error handler class to handle errors

// Middleware to authorize roles
export const authorizeRoles = (...roles) => {

    if(!roles || roles.length === 0) {
        throw new ErrorHandler("No roles provided for authorization", 400);
    }

    return (req, res, next) => {

        // Check if the user has the required role
        if (!roles.includes(req.user.role)) {

            return next(new ErrorHandler(`Role ${req.user.role} is not allowed to access this resource`, 403));

        }

        next(); // Proceed to the next middleware or route handler

    }

}