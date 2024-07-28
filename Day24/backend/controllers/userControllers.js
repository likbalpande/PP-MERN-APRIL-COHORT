const getUserSecretInformation = (req, res) => {
    res.json({
        status: "success",
        data: req.user,
    });
};

module.exports = {
    getUserSecretInformation,
};
