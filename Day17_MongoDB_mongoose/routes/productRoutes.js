const express = require("express");
const { getProducts, createProduct } = require("../controllers/productControllers.js");
const productRouter = express.Router();

productRouter.get("/products", getProducts);
productRouter.post("/products", createProduct);

module.exports = productRouter;
