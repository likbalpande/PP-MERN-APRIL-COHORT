// console.log('Fetching data...');

// const res = fetch('https://dummyjson.com/products');

// res.then((data)=>{
//     const obj = data.json();
    
//     obj.then((js)=>{
//         renderUI(js);
//     })
//     .catch((err)=>{
//         console.log("Cannot parse json", err);    
//     });
// })
// .catch((err)=>{
//     console.log("Error Occurred:", err);
// });

// function renderUI(data){
//     const products = data.products;
//     const firstTitle = products[0].title;
//     const firstThumb = products[0].thumbnail;
//     // console.log(firstTitle, firstThumb);
    
//     // where should i insert?
//     const parent = document.getElementById('root');

//     // what should i insert?
//     const title = document.createElement('h4');
//     title.innerText = firstTitle;

//     // how to insert ?
//     parent.appendChild(title);

//     // what should i insert?
//     const image = document.createElement('img');
//     image.src = firstThumb;

//     // how to insert ?
//     parent.appendChild(image);
// }


// import validateCart from "./cartTeam.js";
// import proceedToPayment from "./paymentTeam.js";

// const pr = validateCart();

// pr.then(proceedToPayment)
// .catch('ahbajkf');



// const arr = [2, 4, 6];

// const res = arr.map((a)=>{
//     console.log(a);
//     return a*a;
// });

// console.log(res);


// const arr = [1, 2, 4, 6, 9];

// const res = arr.filter((a)=>{
//     if(a%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(res)


// const arr = [11, 21, 41, 32];

// const res = arr.reduce((acc,a,b,c)=>{
//     console.log(acc, a, b);
//     return acc+a;
// }, 1000);

// console.log('RESULT:', res)


// const chaiStall = {
//     name: 'chai ki dukan',
//     menu: ['tea', 'coffee', 'milk', 'biscuit']
// }

// const juiceStall = {
//     name: 'juice ki dukan',
//     menu: ['apple juice', 'banana shake','milk', 'biscuit']
// }

// console.log(chaiStall)
// console.log(juiceStall)

const arr = ['tea', 'coffee', 'milk', 'biscuit'];

const chaiStall = {
    name: 'chai ki dukan',
    menu: arr,
}

const juiceStall = {...chaiStall};

juiceStall.name = 'juice ki dukan';
juiceStall.menu[0] = 'apple juice';
juiceStall.menu[1] = 'banana shake';

console.log(chaiStall)
console.log(juiceStall)

