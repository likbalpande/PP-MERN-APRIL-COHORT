const express = require('express');
const fsPromises = require('fs/promises');
const app = express();
const PORT = 1500

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: 'success',
        data: {}
    });
});

app.get('/products', async (req, res) => {
    const productsText = await fsPromises.readFile('./data.json', { encoding: 'utf8' });
    let productsArray;
    try{
        productsArray = JSON.parse(productsText);
    }
    catch{
        productsArray = [];
    }

    res.json({
        status: 'success',
        results: productsArray.length,
        data: {
            products: productsArray
        }
    });
});

// app.post('/products', async (req, res) => {
//     const body = req.body;

//     const productsText = await fsPromises.readFile('./data.json', { encoding: 'utf8' });
//     // parse --> JSON TEXT into JS Object
//     let productsArray;
//     try{
//         productsArray = JSON.parse(productsText);
//     }
//     catch(err){
//         console.log(err);
//         productsArray = [];
//     }
//     let prLen = productsArray.length;
//     let id = productsArray[prLen-1].id + 1;
//     body.id = id;
//     productsArray.push(body);
//     // stringify --> JS Object into JSON Text
//     await fsPromises.writeFile('./data.json', JSON.stringify(productsArray));

//     res.json({
//         status: 'inprogress',
//         data: {}
//     });
// });

app.post('/products', async (req, res) => {
    const { body } = req;
    if(! body.title || ! body.price){
        res.status(400);
        res.json({
            status: 'error',
            message: "title and price is required"
        });
    }

    const productsText = await fsPromises.readFile('./data.json', { encoding: 'utf8' });
    let productsArray;
    try{
        productsArray = JSON.parse(productsText);
    }
    catch{
        productsArray = [];
    }
    let id;
    try{
        id = productsArray[productsArray.length-1].id + 1;
    } 
    catch{
        id = 1;
    }

    body.id = id;
    productsArray.push(body);
    await fsPromises.writeFile('./data.json', JSON.stringify(productsArray));

    res.status(201).json({
        status: 'success',
        data: {
            product: body,
        }
    });
});


app.listen(PORT, () => {
    console.log(`-------------- App started on port ${PORT} ---------------`)
});


















// const student = {
//     name: 'Student',
//     age: '25',
//     'city': 'Delhi',
//     "website": "www.delhi.com",
//     2: 'two',
// }
