const productModel = require("../model/productModel.js");

const validateID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productModel.find({ _id: id });

        if (product.length === 0) {
            res.status(404);
            res.json({
                status: "fail",
                message: "The product with requested ID not found !",
            });
            return;
        }
        next();
    } catch (err) {
        if (err.name === "CastError") {
            res.status(400);
            res.json({
                status: "fail",
                message: "Invalid product Id !",
            });
            return;
        }
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

// GET
const getProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.json({
            status: "success",
            data: {
                products,
            },
        });
    } catch (err) {
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

// POST
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
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

// PUT
const replaceProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const newProduct = await productModel.findOneAndReplace({ _id: id }, body, { returnDocument: "after" });

        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

// PATCH
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        body.updatedAt = Date.now();
        const newProduct = await productModel.findOneAndUpdate({ _id: id }, body, { returnDocument: "after" });

        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

// DELETE
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await productModel.findOneAndDelete({ _id: id });

        res.status(204);
        res.json({
            status: "success",
            data: {
                product: null,
            },
        });
    } catch (err) {
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

// in query --> price[$lte]=2000
// backend --> price:{$lte:2000}

// LIST API
// Advance Query
const listProducts = async (req, res) => {
    try {
        const { q = "", limit = 10, sort = "price", page = 1, fields = "title price", ...rest } = req.query;

        // making query
        let productsQuery = productModel.find(rest);

        // searching (regular expression : regex)
        productsQuery = productsQuery.where("title").regex(RegExp(q, "i"));

        // sorting
        const sortOptions = sort.split("_").join(" ");
        productsQuery = productsQuery.sort(sortOptions);

        // get the total of results
        const countDocuments = await productsQuery.clone().countDocuments();

        // pagination
        productsQuery = productsQuery.skip((page - 1) * limit);
        productsQuery = productsQuery.limit(limit);

        // limiting the fields
        const fieldsOptions = fields.split("_").join(" ");
        productsQuery = productsQuery.select(fieldsOptions);

        // executing the query and bringing the data
        products = await productsQuery;

        res.json({
            status: "success",
            results: products.length,
            total: countDocuments,
            data: {
                products,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

module.exports = {
    getProducts,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct,
    listProducts,
    validateID,
};
