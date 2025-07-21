import Orders from "../models/orderModel.js"; // Importing the Orders model
import Products from "../models/productModel.js"; // Importing the Products model
import Users from "../models/userModel.js"; // Importing the Users model
import ErrorHandler from "../utils/errorHandler.js"; // Importing the ErrorHandler utility


// REGISTER USER ------------------------------ //
export const createNewOrder = async (req, res, next) => {

    // extracting data from the request body
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    // creating a new order
    const order = await Orders.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    })

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- place order controller ---↓');
        console.log(`placed order: ${order}`);
        console.log('↑--- place order controller ---↑');
    }

    // send success response
    res.status(201).json({
        success: true,
        order,
    });

}                                     