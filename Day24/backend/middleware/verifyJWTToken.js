const jwt = require("jsonwebtoken");

const verifyJWTToken = (req, res, next) => {
    headers = req.headers;
    jwt.verify(headers.authorization, process.env.JWT_SECRET_KEY, function (err, decoded) {
        if (err) {
            res.status(401);
            res.json({
                status: "fail",
                message: "unauthorized",
            });
            console.log("❌");
        } else {
            console.log("✅");
            req.user = decoded;
            next();
        }
    });
};

module.exports = verifyJWTToken;
