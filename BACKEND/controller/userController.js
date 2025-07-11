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

