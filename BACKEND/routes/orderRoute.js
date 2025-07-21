import express from "express"; // Express framework for building APIs
import catchAsyncError from "../middleware/catchAsyncError.js"; // Importing catchAsyncError middleware
import { isUserAuth } from "../middleware/auth.js"; // Importing authentication middleware
import { authorizeRoles } from "../middleware/authorizeRoles.js"; // Importing authorization middleware
import { createNewOrder } from "../controller/orderController.js";

const orderRouter = express.Router(); // Creating an instance of Express Router

// ORDERS ROUTES -------------------- //

// Create order [POST]
orderRouter.post('/createOrder', isUserAuth, catchAsyncError(createNewOrder));
// 'http://localhost:5000/api/orders/createOrder'



export default orderRouter; // export product router