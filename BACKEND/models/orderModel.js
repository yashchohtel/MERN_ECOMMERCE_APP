import mongoose from "mongoose"; // Import mongoose

// Order schema
const orderSchema = new mongoose.Schema({

    // shipping information
    shippingInfo: {

        address: {
            type: String,
            required: [true, "Please enter your address"],
        },

        city: {
            type: String,
            required: [true, "Please enter your city"],
        },

        country: {
            type: String,
            required: [true, "Please enter your country"],
        },

        postalCode: {
            type: String,
            required: [true, "Please enter your postal code"],
        },

        phoneNumber: {
            type: String,
            required: [true, "Please enter your phone number"],
        },

    },

    // order items
    orderItems: [

        {
            name: {
                type: String,
                required: true,
            },

            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Products",
                required: true,
            },

            quantity: {
                type: Number,
                required: true,
                default: 1,
            },

            price: {
                type: Number,
                required: true,
            },

            image: {
                type: String,
                required: true,
            },

        },

    ],

    // user who placed the order
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },

    // payment information
    paymentInfo: {

        id: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            required: true,
        },

        paidAt: {
            type: Date,
            required: true,
        },

    },

    // items price
    itemsPrice: {
        type: Number,
        default: 0,
        required: true,
    },

    // tax price
    taxPrice: {
        type: Number,
        default: 0,
        required: true,
    },

    // shipping price
    shippingPrice: {
        type: Number,
        default: 0,
        required: true,
    },

    // total price
    totalPrice: {
        type: Number,
        default: 0,
        required: true,
    },

    // order status
    orderStatus: {
        type: String,
        default: "Processing",
        required: true,
    },

    // diliviery date
    deliveredAt: {
        type: Date,
        default: null,
    },

}, { timestamps: true });

// Create a Orders model
const Orders = mongoose.model("Orders", orderSchema);

// Export the Orders model
export default Orders;