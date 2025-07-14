import express from "express"; // Express framework for building APIs
import catchAsyncError from "../middleware/catchAsyncError.js";
import { getUserDetails, loginUser, logoutUser, registerUser, updatePassword, updateProfile } from "../controller/userController.js";
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

// Update password route [PUT]
userRouter.put('/updatePassword', isUserAuth, catchAsyncError(updatePassword));
// 'http://localhost:5000/api/users/updatePassword'

// User profile update route [PUT]
userRouter.put('/updateProfile', isUserAuth, catchAsyncError(updateProfile));
// 'http://localhost:5000/api/users/updateProfile'

export default userRouter; // export product router