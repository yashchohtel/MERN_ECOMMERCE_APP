import Products from "../models/productModel.js"; // Products model to work with products

// CREATE PRODUCT ---------------------------------- //
export const createProduct = async (req, res) => {

    try {

        const product = new Products(req.body);
        await product.save();


        // logs for debugging remove in production
        if (process.env.NODE_ENV === "development") {
            console.log('↓--- createProduct controller ---↓');
            console.log(product)
            console.log('↑--- createProduct controller ---↑');
        }

        res.status(201).json({ success: true, product });

    } catch (error) {

        res.status(400).json({ success: false, message: error.message });

    }
};