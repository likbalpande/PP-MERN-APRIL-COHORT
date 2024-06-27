const productModel = require("../model/productModel.js");

const getProducts = async (req, res) => {
    const products = await productModel.find({});
    res.json({
        status: "success",
        data: {
            // products: products,
            products,
        },
    });
};

const createProduct = async (req, res) => {
    try {
        const body = req.body;
        const newProduct = await productModel.create(body);
        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        // console.log(err);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

module.exports = {
    // getProducts: getProducts, // old way
    getProducts, // ES6: when key(string) is equal to value(name of variable)
    // createProduct: createProduct,
    createProduct,
};
