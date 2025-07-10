import Users from "../models/userModel.js";
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import ErrorHandler from "../utils/errorHandler.js"; // error handler class to handle errors

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

    // Generate a salt for password hashing
    const salt = await bcrypt.genSalt(10);

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating user details
    const newUser = await Users.create({
        name,
        email,
        password: hashedPassword, // Storing hashed password for security
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

    // Send success response with user details and token
    return res.status(201).json({
        success: true,
        message: "Sign-up successful",
        user: {
            id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            role: savedUser.role,
        }
    });

}