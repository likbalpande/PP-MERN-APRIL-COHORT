const fsPromises = require("fs/promises");

// to access query
// --> req.query

// to access url
// --> req.url

// to access body
// --> req.body

// to access the dynamic values in your url
// --> req.params

const getProducts = async (req, res) => {
    const productsText = await fsPromises.readFile("./data.json", { encoding: "utf8" });
    let productsArray;
    try {
        productsArray = JSON.parse(productsText);
    } catch {
        productsArray = [];
    }
    res.json({
        status: "success",
        results: productsArray.length,
        data: {
            products: productsArray,
        },
    });
};

const replaceProduct = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    if (!body.title || !body.price) {
        res.status(400).json({
            status: "fail",
            message: "Please provide title and price",
        });
        return;
    }

    const text = await fsPromises.readFile("./data.json", { encoding: "utf8" });
    let productsArray;
    try {
        productsArray = JSON.parse(text);
    } catch {
        productsArray = [];
    }

    const productIdx = productsArray.findIndex((elem) => {
        if (elem.id == id) {
            return true;
        } else return false;
    });

    if (productIdx === -1) {
        res.status(400).json({
            status: "fail",
            message: "Invalid product id",
        });
        return;
    }

    // productsArray[productIdx] = {
    //     ...body,
    //     id: productsArray[productIdx].id,
    // };

    const product = productsArray[productIdx];
    const prId = product.id;
    body.id = prId;
    productsArray[productIdx] = body;

    // body.id = productsArray[productIdx].id;
    // productsArray[productIdx] = body;

    await fsPromises.writeFile("./data.json", JSON.stringify(productsArray));
    res.status(200);
    res.json({
        status: "success",
        data: {
            product: productsArray[productIdx],
        },
    });
};

const createProduct = async (req, res) => {
    const { body } = req;
    if (!body.title || !body.price) {
        res.status(400).json({
            status: "fail",
            message: "Please provide title and price",
        });
        return;
    }
    const text = await fsPromises.readFile("./data.json", { encoding: "utf8" });
    let productsArray;
    try {
        productsArray = JSON.parse(text);
    } catch {
        productsArray = [];
    }
    let id = 1;
    const len = productsArray.length;
    if (len > 0) {
        const lastElem = productsArray[len - 1];
        id = lastElem.id + 1;
    }
    body.id = id;
    productsArray.push(body);
    await fsPromises.writeFile("./data.json", JSON.stringify(productsArray));

    res.status(201);
    res.json({
        status: "success",
        data: {
            product: body,
        },
    });
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const text = await fsPromises.readFile("./data.json", { encoding: "utf8" });

    let productsArray;
    try {
        productsArray = JSON.parse(text);
    } catch {
        productsArray = [];
    }

    const productIdx = productsArray.findIndex((elem) => {
        if (elem.id == id) {
            return true;
        } else return false;
    });

    if (productIdx === -1) {
        res.status(400).json({
            status: "fail",
            message: "Invalid product id",
        });
        return;
    }

    const product = productsArray[productIdx];
    const newProduct = { ...product, ...body };
    productsArray[productIdx] = newProduct;
    await fsPromises.writeFile("./data.json", JSON.stringify(productsArray));
    res.status(200);
    res.json({
        status: "success",
        data: {
            product: newProduct,
        },
    });
};

module.exports = {
    getProducts,
    replaceProduct,
    createProduct,
    updateProduct,
};
