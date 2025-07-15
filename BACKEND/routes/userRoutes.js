import express from "express"; // Express framework for building APIs
import catchAsyncError from "../middleware/catchAsyncError.js";
import { deleteUser, getAllUsers, getPersonalDetails, getUserById, loginUser, logoutUser, registerUser, updatePassword, updateProfile, updateUserRole } from "../controller/userController.js";
import { isUserAuth } from "../middleware/auth.js"; // Importing user authentication middleware
import { authorizeRoles } from "../middleware/authorizeRoles.js"; // Importing authorization middleware

const userRouter = express.Router(); // Creating an instance of Express Router

// AUTHENTICATION USER ROUTES -------------------- //

// Register user [POST]
userRouter.post('/registerUser', catchAsyncError(registerUser));
// 'http://localhost:5000/api/users/registerUser'

// Login user [POST]
userRouter.post('/login', catchAsyncError(loginUser));
// 'http://localhost:5000/api/users/login'

// Logout user [GET]
userRouter.get('/logout', catchAsyncError(logoutUser));
// 'http://localhost:5000/api/users/logout'

// Get personal details [GET]
userRouter.get('/me', isUserAuth, catchAsyncError(getPersonalDetails));
// 'http://localhost:5000/api/users/me'

// Update password [PUT]
userRouter.put('/updatePassword', isUserAuth, catchAsyncError(updatePassword));
// 'http://localhost:5000/api/users/updatePassword'

// User profile update [PUT]
userRouter.put('/updateProfile', isUserAuth, catchAsyncError(updateProfile));
// 'http://localhost:5000/api/users/updateProfile'

// Get all user details [GET] -- Admin only
userRouter.get('/admin/getAllUsers', isUserAuth, authorizeRoles("admin"), catchAsyncError(getAllUsers));
// 'http://localhost:5000/api/users/admin/getAllUsers'

// Get user by ID [GET] -- Admin only
userRouter.get('/admin/getUserById/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(getUserById));
// 'http://localhost:5000/api/users/admin/getUserById/:id'

// Promote user to admin [PUT] -- Admin only
userRouter.put('/admin/promoteUserToAdmin/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(updateUserRole));
// 'http://localhost:5000/api/users/admin/promoteUserToAdmin/:id'

// Delete user [DELETE] -- Admin only
userRouter.delete('/admin/deleteUser/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(deleteUser));
// 'http://localhost:5000/api/users/admin/deleteUser/:id'





export default userRouter; // export product router