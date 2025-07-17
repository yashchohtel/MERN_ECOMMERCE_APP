import express from "express"; // Express framework for building APIs
import { addAndUpdateReview, createProduct, deleteProduct, deleteReviewOfProduct, getAllProducts, getAllReviewsOfProduct, getSingleProduct, updateProduct } from "../controller/productController.js";
import catchAsyncError from "../middleware/catchAsyncError.js"; // Importing catchAsyncError middleware
import { isUserAuth } from "../middleware/auth.js"; // Importing authentication middleware
import { authorizeRoles } from "../middleware/authorizeRoles.js"; // Importing authorization middleware

const productRouter = express.Router(); // Creating an instance of Express Router

// PRODUCTS ROUTES -------------------- //

// Get product [GET]
productRouter.get('/getAllProducts', catchAsyncError(getAllProducts));
// 'http://localhost:5000/api/products/getAllProducts'

// Get single product [GET]
productRouter.get('/getSingleProduct/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(getSingleProduct));
// 'http://localhost:5000/api/products/getSingleProduct/:id'

// Create product [POST] -- Admin only
productRouter.post('/admin/createProduct', isUserAuth, authorizeRoles("admin"), catchAsyncError(createProduct));
// 'http://localhost:5000/api/products/admin/createProduct'

// Update product [PUT] -- Admin only
productRouter.put('/admin/updateProduct/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(updateProduct));
// 'http://localhost:5000/api/products/admin/updateProduct/:id'

// Update product [DELETE] -- Admin only
productRouter.delete('/admin/deleteProduct/:id', isUserAuth, authorizeRoles("admin"), catchAsyncError(deleteProduct));
// 'http://localhost:5000/api/products/admin/deleteProduct/:id'

// Add and update product review [PUT]
productRouter.put('/addAndUpdateReview', isUserAuth, catchAsyncError(addAndUpdateReview));
// 'http://localhost:5000/api/products/addAndUpdateReview'

// Get all revews of product [GET]
productRouter.get('/getAllReviewsOfProduct/:id', isUserAuth, catchAsyncError(getAllReviewsOfProduct));
// 'http://localhost:5000/api/products/getAllReviewsOfProduct/:id'

// Delete review of product [DELETE] 
productRouter.delete('/deleteReviewOfProduct', isUserAuth, catchAsyncError(deleteReviewOfProduct));
// 'http://localhost:5000/api/products/deleteReviewOfProduct'

export default productRouter; // export product router
