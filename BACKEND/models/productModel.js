import mongoose from "mongoose"; // Import mongoose
import ErrorHandler from "../utils/errorHandler.js"; // Import ErrorHandler utility

// product schema
const productSchema = new mongoose.Schema({

    // name
    name: {
        type: String,
        required: [true, "please enter product name"],
        trim: true
    },

    // description
    description: {
        type: String,
        required: [true, "Please enter product Description"]
    },

    // price
    price: {
        type: Number,
        required: [true, "Please Enter product Price"],
        maxLength: [8, "price cannot exceed 8 characters"]
    },

    // person who created the product
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },

    // array of images
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            imageUrl: {
                type: String,
                required: true
            },
        }
    ],

    // category
    category: {
        type: String,
        required: [true, "Please enter product category"]
    },

    // stock
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1
    },

    // rating
    rating: {
        type: Number,
        default: 0
    },

    // Number of reviews
    numOfReviews: {
        type: Number,
        default: 0
    },

    // reviews
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "Users",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ]

}, { timestamps: true })

// Instance Method to update stock
productSchema.methods.updateStock = async function (quantity) {

    // updating quantity
    this.stock -= quantity;

    // if no stock
    if (this.stock < 0) {
        throw new ErrorHandler("Not enough stock available");
    }

    // save
    await this.save({ validateBeforeSave: false });
};

// Create a products model
const Products = mongoose.model("Products", productSchema);

// Export the products model
export default Products;