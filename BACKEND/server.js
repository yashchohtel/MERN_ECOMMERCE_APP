// Importing required modules
import express from "express"; // Express framework for building APIs
import dotenv from "dotenv"; // Import dotenv for environment variables
import connectDB from "./config/dataBase.js"; // Import the function to connect to MongoDB
import productRouter from "./routes/productRoutes.js"; // Import product routes
import userRouter from "./routes/userRoutes.js"; // Import user routes
import errorMiddleware from "./middleware/error.js"; // Import error handling middleware

// -------------------- CONFIGURATION  -------------------- //

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// -------------------- MIDDLEWARES -------------------- //

// Enable JSON parsing for request bodies
app.use(express.json());
app.set('query parser', 'extended');

// -------------------- CONNECT TO MONDODB -------------------- //

// Making the connection with MongoDB
connectDB();

// -------------------- ROUTES -------------------- //

// products routes `/api/products`
app.use("/api/products", productRouter); // Use productRouter for handling product-related routes

// user routes `/api/users`
app.use("/api/users", userRouter); // Use userRouter for handling user-related routes

// -------------------- ERROR MIDDLEWARE -------------------- //

app.use(errorMiddleware); // Use error handling middleware

// -------------------- SERVER -------------------- //

// Define PORT from environment variables or use default 5000
const PORT = process.env.PORT || 4000;

// Start the server and listen for requests
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});