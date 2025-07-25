import Orders from "../models/orderModel.js"; // Importing the Orders model
import Products from "../models/productModel.js"; // Importing the Products model
import Users from "../models/userModel.js"; // Importing the Users model
import ErrorHandler from "../utils/errorHandler.js"; // Importing the ErrorHandler utility


// PLACE NEW ORDER ------------------------------ //
export const createNewOrder = async (req, res, next) => {

    console.log(req.user);

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
        paymentInfo: {
            id: paymentInfo.id,
            status: paymentInfo.status,
            paidAt: Date.now()
        },
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

};

// GET SINGLE ORDER DETAIL ------------------------------ //
export const getSingleOrderDetail = async (req, res, next) => {

    // getting order id from request param
    const { id } = req.params;

    // getting order
    const order = await Orders.findById(id).populate("user", "name email").populate("orderItems.product", "name price image");

    // if no order found
    if (!order) {
        return next(new ErrorHandler("Order not found", 404));
    }

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- get single order detail controller ---↓');
        console.log(order);
        console.log('↑--- get single order detail controller ---↑');
    }

    // sending response for success
    res.status(200).json({ success: true, order });

}

// GET MY ORDERS DETAIL ------------------------------ //
export const myOrders = async (req, res, next) => {

    // getting user id from request
    const userId = req.user._id;

    // getting orders for the user
    const orders = await Orders.find({ user: userId }).populate("user", "name email").populate("orderItems.product", "name price image");

    // if no orders found
    if (!orders || orders.length === 0) {
        return next(new ErrorHandler("No orders found for this user", 404));
    }

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- get my orders controller ---↓');
        console.log(orders);
        console.log('↑--- get my orders controller ---↑');
    }

    // sending response for success
    res.status(200).json({ success: true, orders });

}

// GET ALL ORDERS (Admin) ------------------------------ //
export const getAllOrders = async (req, res, next) => {

    // getting all orders
    const orders = await Orders.find().populate("user", "name email").populate("orderItems.product", "name price image");

    // if no orders found
    if (!orders || orders.length === 0) {
        return next(new ErrorHandler("No orders found", 404));
    }

    // calculating total price of all orders
    let totalPrice = 0;

    orders.forEach(order => {
        totalPrice += order.totalPrice;
    })

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- get all orders controller ---↓');
        console.log(orders);
        console.log(`Total Price of all orders: ${totalPrice}`);
        console.log('↑--- get all orders controller ---↑');
    }

    // sending response for success
    res.status(200).json({
        success: true,
        totalPrice,
        orders
    });
}

// UPDATE ORDER STATUS (Admin) ------------------------------ //
export const updateOrderStatus = async (req, res, next) => {

    // getting order id from request param
    const { id } = req.params;

    // geting order status from request body
    const { status } = req.body;

    // getting order
    const order = await Orders.findById(id);

    // if no order found
    if (!order) {
        return next(new ErrorHandler("Order not found", 404));
    }

    // if order is already delivered
    if (order.orderStatus === "delivered") {
        return next(new ErrorHandler("Order is already delivered", 400));
    }

    // for updating stock if status is shipped
    if (status === "shipped") {
        for (const item of order.orderItems) {
            const product = await Products.findById(item.product);
            await product.updateStock(item.quantity);
        }
    }

    // for updating product delivery date
    if (status === "delivered") {
        order.deliveredAt = Date.now();
    }

    // updating order status
    order.orderStatus = status;
    await order.save({ validateBeforeSave: false });

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- update order status controller ---↓');
        console.log(`Updated status: ${status}`);
        console.log(`Updated Order: ${order}`);
        console.log('↑--- update order status controller ---↑');
    }

    // sending response for success
    res.status(200).json({
        success: true,
        message: `Order status updated to ${req.body.status}`,
        order,
    });
};

// DELETE ORDER CONTROLLER ------------------------------ //
export const deleteOrder = async (req, res, next) => {

    const { id } = req.params; // getting order id from request param

    const order = await Orders.findById(id); // getting order by id

    // if no order found
    if (!order) {
        return next(new ErrorHandler("Order not found", 404));
    }

    // deleting order
    await Orders.findByIdAndDelete(id);

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- delete order controller ---↓');
        console.log(`Deleted Order ID: ${id}`);
        console.log('↑--- delete order controller ---↑');
    }

    // sending response for success
    res.status(200).json({
        success: true,
        message: "Order deleted successfully",
    });

}

