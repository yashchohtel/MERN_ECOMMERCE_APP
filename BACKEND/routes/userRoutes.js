import express from "express"; // Express framework for building APIs
import catchAsyncError from "../middleware/catchAsyncError.js";
import { registerUser } from "../controller/userController.js";

const userRouter = express.Router(); // Creating an instance of Express Router

userRouter.post('/registerUser', catchAsyncError(registerUser)); // 'http://localhost:5000/api/users/registerUser'

export default userRouter; // export product router