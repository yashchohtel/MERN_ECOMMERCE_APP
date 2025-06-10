import Products from "../models/productModel.js"; // Products model to work with products
import ApiFeatures from "../utils/apiFeatures.js"; // api features class to handle query operations
import ErrorHandler from "../utils/errorHandler.js"; // error handler class to handle errors

// CREATE PRODUCT ------------------------------ //
export const createProduct = async (req, res, next) => {

    // getting product from request body
    const productDetails = req.body;

    // if no details found
    if (!productDetails) {
        return next(new ErrorHandler("Please enter product details", 404));
    }

    // createe a new product and save
    const product = new Products(productDetails);
    await product.save();

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- createProduct controller ---↓');
        console.log(product)
        console.log('↑--- createProduct controller ---↑');
    }

    // sending response for sucess
    res.status(201).json({ success: true, product });

};

// GET ALL PRODUCTS ------------------------------ //
export const getAllProducts = async (req, res) => {

    // Initializes ApiFeatures with a Mongoose query and request query parameters
    const apiFeature = new ApiFeatures(Products.find(), req.query).search(); 
    
    console.log(req.query);
    
    // getting all product 
    const products = await apiFeature.query;

    // if no product found
    if (!products) {
        return next(new ErrorHandler("No Products Found", 404));
    }

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- getAllProducts controller ---↓');
        console.log(products)
        console.log('↑--- getAllProducts controller ---↑');
    }

    // sending response for sucess
    res.status(200).json({ success: true, products });

};

// GET SINGLE PRODUCT
export const getSingleProduct = async (req, res, next) => {

    // getting product id from reqest param 
    const { id } = req.params;

    // getting product
    const product = await Products.findById(id);

    // if no product found
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- getSingleProduct controller ---↓');
        console.log(product);
        console.log('↑--- getSingleProduct controller ---↑');
    }

    // sending response for sucess
    res.status(200).json({ success: true, product });
};

// UPDATE PRODUCT ------------------------------ //
export const updateProduct = async (req, res, next) => {

    // getting product id from reqest param 
    const { id } = req.params;

    // getting the product
    let product = await Products.findById(id);

    // if no product found
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    // updating product
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

    // sending response for sucess
    res.status(200).json({ success: true, product });

};

// DELETE PRODUCT ------------------------------ //
export const deleteProduct = async (req, res, next) => {

    // getting product id from reqest param 
    const { id } = req.params;

    // getting product
    const product = await Products.findById(id);

    // if no product found
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    // deleting product
    await product.deleteOne();

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log('↓--- deleteProduct controller ---↓');
        console.log(product);
        console.log('↑--- deleteProduct controller ---↑');
    }

    // sending response for sucess
    res.status(200).json({ success: true, message: "Product deleted successfully" });


}; 