const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const findUserByEmail = async (email) => {
    return UserModel.findOne({ email });
};

const createJWTToken = (email, _id) => {
    return jwt.sign(
        {
            email,
            _id,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 60 * 60 }
    );
};

const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400);
            res.json({
                status: "fail",
                message: "Email and password are required",
                data: {},
            });
            return;
        }

        const isEmailExists = await findUserByEmail(email);
        if (isEmailExists) {
            res.status(400);
            res.json({
                status: "fail",
                message: "User already exists",
                data: {},
            });
            return;
        }

        const newUser = await UserModel.create({
            email,
            password,
        });

        res.status(201).json({
            status: "success",
            message: "User created!",
            data: { user: newUser },
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            data: {},
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400);
            res.json({
                status: "fail",
                message: "Email and password are required",
                data: {},
            });
            return;
        }

        const user = await findUserByEmail(email);
        if (!user) {
            res.status(400);
            res.json({
                status: "fail",
                message: "User does not exist. Please sign up before login.",
                data: {},
            });
            return;
        }

        const isCorrectPassword = await user.verifyPassword(password, user.password);
        if (!isCorrectPassword) {
            res.status(400);
            res.json({
                status: "fail",
                message: "Invalid password",
            });
            return;
        }

        res.status(200);
        res.json({
            status: "success",
            message: "User is logged in",
            data: {
                user: {
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                },
                token: createJWTToken(user.email, user._id),
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            data: {},
        });
    }
};

const getUserSecretInformation = (req, res) => {
    headers = req.headers;
    jwt.verify(headers.authorization, process.env.JWT_SECRET_KEY, function (err, decoded) {
        if (err) {
            res.json({
                status: "fail",
                data: {},
            });
        } else {
            res.json({
                status: "success",
                data: decoded,
            });
        }
    });
};

module.exports = {
    signup,
    login,
    getUserSecretInformation,
};
