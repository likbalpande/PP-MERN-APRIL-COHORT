const express = require("express");
const { signup, login, getUserSecretInformation } = require("../controllers/authControllers.js");
const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/check/userInfo", getUserSecretInformation);

module.exports = authRouter;
