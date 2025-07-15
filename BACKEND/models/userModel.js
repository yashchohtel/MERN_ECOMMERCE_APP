import mongoose from "mongoose"; // Import mongoose
import validator from "validator"; // Import validator
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import jwt from "jsonwebtoken"; // Import JWT for authentication
import crypto from "crypto"; // Import crypto for generating secure random values

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
        minlength: [8, "Password must be at least 8 characters"],
        select: false, // Do not return password in queries
    },

    // password reset OTP
    passwordResetOtp: {
        type: String,
        default: null
    },

    // password reset OTP expiration time 
    resetPasswordExpiredAt: {
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
        enum: ["user", "admin"],
        default: "user",
    },

    // is owner
    isOwner: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

// Pre-save hook to hash the password before saving
userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) return next(); // Only hash if password is modified

    // Hash the password before storing it in the database
    this.password = await bcrypt.hash(this.password, 10);

    next();

});

// Creating a JWT token for the user
userSchema.methods.getJwtToken = function () {

    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })

}

// Method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password); // Compare entered password with hashed password
}

// Create a user model
const Users = mongoose.model("Users", userSchema);

// Export the Users model
export default Users;
