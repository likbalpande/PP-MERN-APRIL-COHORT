const { getProducts, replaceProduct, createProduct, updateProduct } = require("../Controllers/ProductControllers.js");
const express = require("express");
const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(createProduct);
productRouter.route("/:id").put(replaceProduct).patch(updateProduct);

module.exports = productRouter;
