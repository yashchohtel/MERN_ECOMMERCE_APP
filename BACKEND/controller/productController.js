import Products from "../models/productModel.js"; // Products model to work with products
import ErrorHandler from "../utils/errorHandler.js";

// CREATE PRODUCT ------------------------------ //
export const createProduct = async (req, res, next) => {

    const productDetails = req.body;

    if (!productDetails) {
        return next(new ErrorHandler("Please enter product details", 404));
    }

    // createe a new product
    const product = new Products(productDetails);
    await product.save();


    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- createProduct controller ---↓');
        console.log(product)
        console.log('↑--- createProduct controller ---↑');
    }

    res.status(201).json({ success: true, product });

};

// GET ALL PRODUCT ------------------------------ //
export const getAllProducts = async (req, res) => {

    const products = await Products.find();

    if (!products) {
        return next(new ErrorHandler("No Products Found", 404));
    }

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- getAllProducts controller ---↓');
        console.log(products)
        console.log('↑--- getAllProducts controller ---↑');
    }


    res.status(200).json({ success: true, products });

};

export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        let product = await Products.findById(id);

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        product = await Products.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        // logs for debugging remove in production
        if (process.env.NODE_ENV === "development") {
            console.log('↓--- updateProduct controller ---↓');
            console.log(product)
            console.log('↑--- updateProduct controller ---↑');
        }

        res.status(200).json({ success: true, product });
    } catch (error) {
        next(error);
    }
};