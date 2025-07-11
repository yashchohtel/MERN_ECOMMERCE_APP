import express from "express"; // Express framework for building APIs
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controller/productController.js";
import catchAsyncError from "../middleware/catchAsyncError.js"; // Importing catchAsyncError middleware
import { isUserAuth } from "../middleware/auth.js"; // Importing authentication middleware
import { authorizeRoles } from "../middleware/authorizeRoles.js"; // Importing authorization middleware

const productRouter = express.Router(); // Creating an instance of Express Router

// PRODUCTS ROUTES -------------------- //

// Create product route [POST]
productRouter.post('/createProduct', isUserAuth, authorizeRoles("admin"), catchAsyncError(createProduct));
// 'http://localhost:5000/api/products/createProduct'

// Get product route [GET]
productRouter.get('/getAllProducts', catchAsyncError(getAllProducts));
// 'http://localhost:5000/api/products/getAllProducts'

// Get single product route [GET]
productRouter.get('/getSingleProduct/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(getSingleProduct));
// 'http://localhost:5000/api/products/getSingleProduct/:id'

// Update product route [PUT]
productRouter.put('/updateProduct/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(updateProduct));
// 'http://localhost:5000/api/products/updateProduct/:id'

// Update product route [DELETE]
productRouter.delete('/deleteProduct/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(deleteProduct));
// 'http://localhost:5000/api/products/deleteProduct/:id'

export default productRouter; // export product router
