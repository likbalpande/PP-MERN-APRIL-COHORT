// import mongoose from 'mongoose'; // ES6
const mongoose = require("mongoose"); // commonjs

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: String,
    thumbnail: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
