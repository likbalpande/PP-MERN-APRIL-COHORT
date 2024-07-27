const express = require("express");
const authRouter = require("./routes/authRoutes");
require("dotenv").config();
require("./config/db.js");
const cors = require("cors");
const port = 1700;

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: true,
    })
);

app.get("/", (req, res) => {
    res.send("App is running...");
});

app.use("/api/v1/auth", authRouter);

app.listen(process.env.PORT || port, () => {
    console.log(`-------- App is running on port ${process.env.PORT || port} --------`);
});
