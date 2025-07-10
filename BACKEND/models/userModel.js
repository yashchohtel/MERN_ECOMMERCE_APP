import mongoose from "mongoose"; // Import mongoose
import validator from "validator"; // Import validator

// user schema
const userSchema = new mongoose.Schema({

    // name
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxlength: [30, "Name cannot exceed 30 characters"],
        minlength: [4, "Name must be at least 4 characters"],
        trim: true,
    },

    // email
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },

    // password
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [8, "Password must be at least 6 characters"],
        select: false, // Do not return password in queries
    },

    // password reset OTP
    passwordResetOtp: {
        type: String,
        default: null
    },

    // password reset OTP expiration time 
    passwordResetOtpExpiredAt: {
        type: Date,
        default: null
    },

    // avatar
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
    },

    // role
    role: {
        type: String,
        default: "user",
    },

}, { timestamps: true });

// Create a user model
const Users = mongoose.model("Users", userSchema);

// Export the Users model
export default Users;
