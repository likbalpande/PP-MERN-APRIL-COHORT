const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        next();
    } else {
        next();
    }
});

userSchema.methods.verifyPassword = async function (password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
};

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
