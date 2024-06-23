//Model ~View~ Controller(functions)
const express = require("express");
const productRouter = require("./Routes/ProductRoutes.js");
const morgan = require("morgan");
const fsPromises = require("fs/promises");

const app = express();

app.use(express.json());

app.use(async (req, res, next) => {
    res.set({
        "Server-time": new Date().toISOString(),
        "Hello-from": "Indian Server",
    });
    await fsPromises.appendFile("./logs.txt", `${req.url} ${req.method} \n`);
    next();
});

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Server is running...",
    });
});

app.use("/products", productRouter);

const PORT = 1400;
app.listen(PORT, () => {
    console.log("--------- Server started ----------");
});
