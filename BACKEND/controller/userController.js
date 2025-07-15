import Users from "../models/userModel.js"; // user model to interact with user data
import ErrorHandler from "../utils/errorHandler.js"; // error handler class to handle errors
import { sendToken } from "../utils/jwtToken.js"; // send token function to send token

// REGISTER USER ------------------------------ //
export const registerUser = async (req, res, next) => {

    // getting user details from request body
    const { name, email, password } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password) {
        return next(new ErrorHandler("Missing user details", 400));
    }

    // Check if the email already exists in the database
    const existingEmail = await Users.findOne({ email });

    if (existingEmail) {
        return next(new ErrorHandler("Email already exists", 400));
    }

    // creating user details
    const newUser = await Users.create({
        name,
        email,
        password,
        avatar: {
            public_id: "sample_id",
            imageUrl: "sample_url"
        }
    })

    // Save the new user to the database
    const savedUser = await newUser.save();

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- register controller ---↓');
        console.log(`User created: ${savedUser}`);
        console.log('↑--- register controller ---↑');
    }

    // sending token to the user
    sendToken(savedUser, 201, res);

}

// LOGIN USER ------------------------------ //
export const loginUser = async (req, res, next) => {

    // getting user details from request body
    const { email, password } = req.body;

    // Check if all required fields are provided
    if (!email || !password) {
        return next(new ErrorHandler("Missing email or password", 400));
    }

    // Find the user by email
    const user = await Users.findOne({ email }).select("+password");

    // If user not found, return error
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    // Check if the password matches
    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- login controller ---↓');
        console.log(`User logged in: ${user}`);
        console.log('↑--- login controller ---↑');
    }

    // sending token to the user
    sendToken(user, 200, res);

}

// LOGOUT USER ------------------------------ //
export const logoutUser = async (req, res, next) => {

    // Clear the cookie by setting it to an empty value and a past expiration date
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" // Use secure cookies in production
    });

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- logout controller ---↓');
        console.log("User logged out successfully");
        console.log('↑--- logout controller ---↑');
    }

    // Return success response
    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });

}

// GET USER DETAILS ------------------------------ //
export const getPersonalDetails = async (req, res, next) => {

    // Get the user ID from the request object
    const userId = req.user._id;

    // Find the user by ID
    const user = await Users.findById(userId).select("-password");

    // If user not found, return error
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- get user details controller ---↓');
        console.log(`User details retrieved: ${user}`);
        console.log('↑--- get user details controller ---↑');
    }

    // Return user details
    res.status(200).json({
        success: true,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role
        }
    });

}

// UPDATE PASSWORD ------------------------------ //
export const updatePassword = async (req, res, next) => {

    // Get the user ID from the request object
    const userId = req.user._id;

    // Get the passwords from the request body
    const { oldPassword, newPassword, confirmPassword } = req.body;

    // Check if all passwords are provided
    if (!oldPassword || !newPassword || !confirmPassword) {
        return next(new ErrorHandler("Please provide old password, new password, and confirm password", 400));
    }

    // Find the user by ID
    const user = await Users.findById(userId).select("+password");

    // If user not found, return error
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    // Check if the old password matches
    const isOldPasswordMatch = await user.comparePassword(oldPassword);

    if (!isOldPasswordMatch) {
        return next(new ErrorHandler("Old password is incorrect", 401));
    }

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
        return next(new ErrorHandler("New password and confirm password do not match", 400));
    }

    // Update the password
    user.password = newPassword;
    await user.save();

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- update password controller ---↓');
        console.log(`Password updated for user: ${user}`);
        console.log('↑--- update password controller ---↑');
    }

    // Return success response
    res.status(200).json({
        success: true,
        message: "Password updated successfully"
    });

};

// UPDATE PROFILE ------------------------------ //
export const updateProfile = async (req, res, next) => {

    // Get the user ID from the request object
    const userId = req.user._id;

    // Get the updated profile details from the request body
    const { name, email } = req.body;

    // Check if all required fields are provided
    if (!name || !email) {
        return next(new ErrorHandler("Please provide name and email", 400));
    }

    // Check if the new email is already taken by another user
    const existingUser = await Users.findOne({ email, _id: { $ne: userId } });

    console.log(existingUser);

    if (existingUser) {
        return next(new ErrorHandler("Email already in use by another account", 400));
    }

    // Update user in one query
    const updatedUser = await Users.findOneAndUpdate(
        { _id: userId },
        { name, email },
        { new: true, runValidators: true }
    );

    if (!updatedUser) {
        return next(new ErrorHandler("User not found", 404));
    }

    if (process.env.NODE_ENV === "development") {
        console.log('↓--- update profile controller ---↓');
        console.log(`Profile updated for user: ${updatedUser}`);
        console.log('↑--- update profile controller ---↑');
    }

    res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        user: {
            id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            avatar: updatedUser.avatar,
            role: updatedUser.role
        }
    });
};

// GET ALL USERS ------------------------------ //
export const getAllUsers = async (req, res, next) => {

    // Fetch all users from the database
    const users = await Users.find().select("-password");

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- get all users controller ---↓');
        console.log(`Total users found: ${users.length}`);
        console.log('↑--- get all users controller ---↑');
    }

    // Return the list of users
    res.status(200).json({
        success: true,
        users
    });

}

// GET USER BY ID ------------------------------ //
export const getUserById = async (req, res, next) => {

    // Get the user ID from the request parameters
    const { id } = req.params;

    // Validate id
    if (!id) {
        return next(new ErrorHandler("User ID is required", 400));
    }

    // Find user by id, exclude password
    const user = await Users.findById(id).select("-password");

    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- get user by id controller ---↓');
        console.log(`User details retrieved: ${user}`);
        console.log('↑--- get user by id controller ---↑');
    }

    // Return user details
    res.status(200).json({
        success: true,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role
        }
    });
};

// UPDATE USER ROLE ------------------------------ //
export const updateUserRole = async (req, res, next) => {

    // Get the user ID and new role from the request parameters and body
    const { id } = req.params;

    // Check if the user ID and role are provided
    const { role } = req.body;

    // Validate input
    if (!id || !role) {
        return next(new ErrorHandler("User ID and new role are required", 400));
    }

    // Only allow 'admin' or 'user' roles for security
    if (!["admin", "user"].includes(role)) {
        return next(new ErrorHandler("Invalid role specified", 400));
    }

    // Find and update user role
    const user = await Users.findByIdAndUpdate(
        id,
        { role },
        { new: true, runValidators: true }
    ).select("-password");

    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- update user role controller ---↓');
        console.log(`User role updated: ${user}`);
        console.log('↑--- update user role controller ---↑');
    }

    // Return success response
    res.status(200).json({
        success: true,
        message: `User role updated to ${role}`,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role
        }
    });
};

// DELETE USER ------------------------------ //
export const deleteUser = async (req, res, next) => {

    // Get the user ID from the request parameters
    const { id } = req.params;

    // Validate id
    if (!id) {
        return next(new ErrorHandler("User ID is required", 400));
    }
    
    // check if the user is an owner
    const user = await Users.findById(id);

    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    // Check if the user is an owner
    if (user.isOwner) {
        return next(new ErrorHandler("Cannot delete the owner", 403));
    }

    // Delete the user
    await user.deleteOne();

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- delete user controller ---↓');
        console.log(`User deleted: ${user}`);
        console.log('↑--- delete user controller ---↑');
    }

    // Return success response
    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });

};