// const fs = require('fs');
// const fsPromises = require('fs/promises');

// // Promise Function
// // It returns a promise

// console.log('start');
// const result = await fsPromises.readFile('./text.txt', { encoding: 'utf8' });
// result.then((res)=>{
//     console.log("res = ", res);
// })
// console.log('end');



// // Callback Function
// // It accepts a callback function which is then executed


// // Synchronous Function
// // It behaves in a synchronous way
// // Blocking Operation

// // const data = fs.readFileSync('./text.txt');
// // const text = data.toString();

// console.log('start');
// const data = fs.readFileSync('./text.txt', { encoding: 'utf8' });
// console.log(data);
// console.log('end');



// console.log('START');

// const fs = require('fs');
// const fsPromises = require('fs/promises');

// function readFileSynchronously (){
//     const data = fs.readFileSync('./text.txt', { encoding: 'utf8' });
//     console.log(data);
// }
// readFileSynchronously();

// async function readFileASynchronouslyAsPromise (){
//     try{
//         const data = await fsPromises.readFile('./text.txt', { encoding: 'utf8' });
//         console.log(data);
//     }
//     catch(err){
//         console.log('Error Occurred:', err);
//     }
// }
// readFileASynchronouslyAsPromise();

// async function readFileASynchronouslyAsCallback (){
//     fs.readFile('./text.txt', {encoding: 'utf8'}, (err, data) => {
//         if (err) {
//             console.log('Error Occurred:', err);
//         }
//         console.log(data);
//     });
// }
// readFileASynchronouslyAsCallback();

// fs.writeFileSync('./text.txt', "Hello from JS!");
// fsPromises.writeFile('./text.txt', "Hello from JS!");

// console.log('END');

const http = require('http');
const fsPromises = require('fs/promises');

const app = http.createServer((req, res)=>{
    fsPromises.appendFile('./logs.txt', `Request: ${req.url} ${new Date().toISOString()} \n`);
    res.setHeader('Content-Type', 'text/html'); 
    fsPromises.readFile('./home.html', {encoding: "utf8"}).then((data)=>{
        res.end(data);
    });
});

app.listen(1900);




























