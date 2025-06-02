import express from "express"; // Express framework for building APIs
import { createProduct } from "../controller/productController.js";

const productRouter = express.Router(); // Creating an instance of Express Router

// PRODUCTS ROUTES -------------------- //

// Create product route [POST]
productRouter.post('/createProduct', createProduct); // 'http://localhost:3000/api/products/createProduct'











export default productRouter; // export product router