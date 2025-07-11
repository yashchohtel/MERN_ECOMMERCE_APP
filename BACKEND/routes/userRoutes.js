import express from "express"; // Express framework for building APIs
import catchAsyncError from "../middleware/catchAsyncError.js";
import { loginUser, logoutUser, registerUser } from "../controller/userController.js";

const userRouter = express.Router(); // Creating an instance of Express Router

// AUTHENTICATION USER ROUTES -------------------- //

// Register user route [POST]
userRouter.post('/registerUser', catchAsyncError(registerUser)); // 'http://localhost:5000/api/users/registerUser'

// Login user route [POST]
userRouter.post('/login', catchAsyncError(loginUser)); // 'http://localhost:5000/api/users/login'

// Logout user route [GET]
userRouter.get('/logout', catchAsyncError(logoutUser)); // 'http://localhost:5000/api/users/logout'

export default userRouter; // export product router