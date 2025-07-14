import express from "express"; // Express framework for building APIs
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controller/productController.js";
import catchAsyncError from "../middleware/catchAsyncError.js"; // Importing catchAsyncError middleware
import { isUserAuth } from "../middleware/auth.js"; // Importing authentication middleware
import { authorizeRoles } from "../middleware/authorizeRoles.js"; // Importing authorization middleware

const productRouter = express.Router(); // Creating an instance of Express Router

// PRODUCTS ROUTES -------------------- //

// Get product route [GET]
productRouter.get('/getAllProducts', catchAsyncError(getAllProducts));
// 'http://localhost:5000/api/products/getAllProducts'

// Get single product route [GET]
productRouter.get('/getSingleProduct/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(getSingleProduct));
// 'http://localhost:5000/api/products/getSingleProduct/:id'

// Create product route [POST]
productRouter.post('/admin/createProduct', isUserAuth, authorizeRoles("admin"), catchAsyncError(createProduct));
// 'http://localhost:5000/api/products/admin/createProduct'

// Update product route [PUT]
productRouter.put('/admin/updateProduct/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(updateProduct));
// 'http://localhost:5000/api/products/admin/updateProduct/:id'

// Update product route [DELETE]
productRouter.delete('/admin/deleteProduct/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(deleteProduct));
// 'http://localhost:5000/api/products/admin/deleteProduct/:id'

export default productRouter; // export product router
