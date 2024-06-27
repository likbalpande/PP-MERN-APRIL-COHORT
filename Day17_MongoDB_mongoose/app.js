const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const productRouter = require("./routes/productRoutes.js");
require("./config/db.js");

const app = express();

app.use(express.json());

app.use(productRouter);

app.listen(process.env.PORT, () => {
    console.log(`---------- Server started ${process.env.PORT} ----------`);
});
