const express = require("express");
const {
    getProducts,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct,
    validateID,
} = require("../controllers/productControllers.js");
const productRouter = express.Router();

productRouter.route("/products").get(getProducts).post(createProduct);

productRouter
    .route("/products/:id")
    .put(validateID, replaceProduct)
    .patch(validateID, updateProduct)
    .delete(validateID, deleteProduct);

module.exports = productRouter;
