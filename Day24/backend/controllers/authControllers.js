const UserModel = require("../models/userModel");

const findUserByEmail = async (email) => {
    return UserModel.findOne({ email });
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

const login = (async = (req, res) => {
    //... your own logic
    res.status(200);
    res.json({
        status: "success",
        message: "User is logged in",
    });
});

module.exports = {
    signup,
    login,
};
