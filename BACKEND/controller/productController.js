import Products from "../models/productModel.js"; // Products model to work with products
import ApiFeatures from "../utils/apiFeatures.js"; // api features class to handle query operations
import ErrorHandler from "../utils/errorHandler.js"; // error handler class to handle errors

// CREATE PRODUCT ------------------------------ //
export const createProduct = async (req, res, next) => {

    // getting product from request body
    const productDetails = req.body;

    console.log("controller", req.user);

    // if no details found
    if (!productDetails) {
        return next(new ErrorHandler("Please enter product details", 404));
    }

    // createe a new product and save
    const product = new Products({
        ...productDetails,
        creator: req.user._id, // setting the creator of the product
    });

    await product.save();

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log("↓--- createProduct controller ---↓");
        console.log(product);
        console.log("↑--- createProduct controller ---↑");
    }

    // sending response for sucess
    res.status(201).json({ success: true, product });
};

// GET ALL PRODUCTS ------------------------------ //
export const getAllProducts = async (req, res) => {

    // results per page for pagination
    const resultsPerPage = 10;

    // products count for pagination
    const productsCount = await Products.countDocuments();

    // Initializes ApiFeatures with a Mongoose query and request query parameters
    const apiFeature = new ApiFeatures(Products.find(), req.query).search().filter().pagination(resultsPerPage);

    // getting all product
    const products = await apiFeature.query;

    // if no product found
    if (!products) {
        return next(new ErrorHandler("No Products Found", 404));
    }

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log("↓--- getAllProducts controller ---↓");
        console.log(products);
        console.log("↑--- getAllProducts controller ---↑");
    }

    // sending response for sucess
    res.status(200).json({
        success: true,
        products,
        productsCount,
    });
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
        console.log("↓--- getSingleProduct controller ---↓");
        console.log(product);
        console.log("↑--- getSingleProduct controller ---↑");
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
        useFindAndModify: false,
    });

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log("↓--- updateProduct controller ---↓");
        console.log(product);
        console.log("↑--- updateProduct controller ---↑");
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
        console.log("↓--- deleteProduct controller ---↓");
        console.log(product);
        console.log("↑--- deleteProduct controller ---↑");
    }

    // sending response for sucess
    res
        .status(200)
        .json({ success: true, message: "Product deleted successfully" });
};

// ADD AND UPDATE REVIEW ----------------------- //
export const addAndUpdateReview = async (req, res, next) => {

    // destructuring rating and comment from request body
    const { rating, comment, productId } = req.body;

    // review object to be added or updated
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment: comment,
    }

    // getting product
    const product = await Products.findById(productId);

    // if no product found
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    // checking if user has already reviewed the product
    const reviewIndex = product.reviews.findIndex(review => review.user.toString() === req.user._id.toString());

    console.log(reviewIndex)

    // update flag
    let revAllreadyAdd = reviewIndex !== -1 ? true : false;

    if (reviewIndex !== -1) {

        // User has already reviewed, update the review
        product.reviews[reviewIndex].rating = rating;
        product.reviews[reviewIndex].comment = comment;

    } else {

        // User has not reviewed, add a new review
        product.reviews.push(review);

        // Increment number of reviews
        product.numOfReviews += 1;

    }

    // Recalculate average rating
    product.rating = product.reviews.reduce((acc, item) => acc + item.rating, 0) / product.reviews.length;

    // Save the updated product
    await product.save({ validateBeforeSave: false });

    // logs for debugging remove in production
    if (process.env.NODE_ENV === "development") {
        console.log("↓--- addAndUpdateReview controller ---↓");
        console.log(product);
        console.log("↑--- addAndUpdateReview controller ---↑");
    }

    // sending response for sucess
    res.status(200).json({
        success: true,
        message: revAllreadyAdd ? "Review updated successfully" : "Review added successfully",
    });

}