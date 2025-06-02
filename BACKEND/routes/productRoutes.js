import express from "express"; // Express framework for building APIs
import { createProduct, getAllProducts } from "../controller/productController.js";
import catchAsyncError from "../middleware/catchAsyncError.js";

const productRouter = express.Router(); // Creating an instance of Express Router

// PRODUCTS ROUTES -------------------- //

// Create product route [POST]
productRouter.post('/createProduct', catchAsyncError(createProduct)); // 'http://localhost:3000/api/products/createProduct'

// Create product route [GET]
productRouter.get('/getAllProducts', catchAsyncError(getAllProducts)); // 'http://localhost:3000/api/products/getAllProducts'











export default productRouter; // export product router