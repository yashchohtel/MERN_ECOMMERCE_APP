import mongoose from "mongoose"; // Import mongoose

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

    // rating
    rating: {
        type: Number,
        default: 0
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
                ref: "User",
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

// Create a products model
const Products = mongoose.model("Products", productSchema);

// Export the products model
export default Products;






