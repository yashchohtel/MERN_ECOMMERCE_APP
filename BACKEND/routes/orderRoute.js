import express from "express"; // Express framework for building APIs
import catchAsyncError from "../middleware/catchAsyncError.js"; // Importing catchAsyncError middleware
import { isUserAuth } from "../middleware/auth.js"; // Importing authentication middleware
import { authorizeRoles } from "../middleware/authorizeRoles.js"; // Importing authorization middleware
import { createNewOrder, getAllOrders, getSingleOrderDetail, myOrders } from "../controller/orderController.js";

const orderRouter = express.Router(); // Creating an instance of Express Router

// ORDERS ROUTES -------------------- //

// Create order [POST]
orderRouter.post('/createOrder', isUserAuth, catchAsyncError(createNewOrder));
// 'http://localhost:5000/api/orders/createOrder'

// Get my orders [GET]
orderRouter.get('/getMyOrders', isUserAuth, catchAsyncError(myOrders));
// 'http://localhost:5000/api/orders/getMyOrders'

// Get single order detail [GET]
orderRouter.get('/getSingleOrderDetail/:id', isUserAuth, catchAsyncError(getSingleOrderDetail));
// 'http://localhost:5000/api/orders/getSingleOrderDetail/:id'

// Get all orders [GET] -- Admin only
orderRouter.get('/getAllOrdersDetails', isUserAuth, authorizeRoles("admin"), catchAsyncError(getAllOrders));
// 'http://localhost:5000/api/orders/getAllOrdersDetails'

export default orderRouter; // export product router