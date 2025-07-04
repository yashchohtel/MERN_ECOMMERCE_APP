import express from "express"; // Express framework for building APIs
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controller/productController.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import Products from "../models/productModel.js";

const productRouter = express.Router(); // Creating an instance of Express Router

// PRODUCTS ROUTES -------------------- //

// Create product route [POST]
productRouter.post('/createProduct', catchAsyncError(createProduct)); // 'http://localhost:3000/api/products/createProduct'

// Get product route [GET]
productRouter.get('/getAllProducts', catchAsyncError(getAllProducts)); // 'http://localhost:3000/api/products/getAllProducts'

// Get single product route [GET]
productRouter.get('/getSingleProduct/:id', catchAsyncError(getSingleProduct)); // 'http://localhost:3000/api/products/getSingleProduct/:id'

// Update product route [PUT]
productRouter.put('/updateProduct/:id', catchAsyncError(updateProduct)); // 'http://localhost:3000/api/products/updateProduct/:id'

// Update product route [DELETE]
productRouter.delete('/deleteProduct/:id', catchAsyncError(deleteProduct)); // 'http://localhost:3000/api/products/deleteProduct/:id'

export default productRouter; // export product router