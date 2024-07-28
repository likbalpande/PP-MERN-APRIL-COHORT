const express = require("express");
const { getUserSecretInformation } = require("../controllers/userControllers.js");
const userRouter = express.Router();

userRouter.get("/info", getUserSecretInformation);

module.exports = userRouter;
