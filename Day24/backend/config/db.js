const mongoose = require("mongoose");

let url =
    "mongodb+srv://<username>:<password>@cluster0.tn2fkag.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=Cluster0";

url = url.replace("<password>", process.env.DB_PASSWORD);
url = url.replace("<username>", process.env.DB_USERNAME);
url = url.replace("<dbName>", process.env.DB_NAME);

mongoose
    .connect(url)
    .then(() => {
        console.log("------------ Connected to DB ------------");
    })
    .catch((err) => {
        console.log("----------- Error connecting to DB ----------");
        console.log(err);
    });
