import express from "express"; // Express framework for building APIs
import catchAsyncError from "../middleware/catchAsyncError.js";
import { getUserDetails, loginUser, logoutUser, registerUser } from "../controller/userController.js";
import { isUserAuth } from "../middleware/auth.js"; // Importing user authentication middleware

const userRouter = express.Router(); // Creating an instance of Express Router

// AUTHENTICATION USER ROUTES -------------------- //

// Register user route [POST]
userRouter.post('/registerUser', catchAsyncError(registerUser));
// 'http://localhost:5000/api/users/registerUser'

// Login user route [POST]
userRouter.post('/login', catchAsyncError(loginUser));
// 'http://localhost:5000/api/users/login'

// Logout user route [GET]
userRouter.get('/logout', catchAsyncError(logoutUser));
// 'http://localhost:5000/api/users/logout'

// Get user details route [GET]
userRouter.get('/me', isUserAuth, catchAsyncError(getUserDetails));
// 'http://localhost:5000/api/users/me'

export default userRouter; // export product router