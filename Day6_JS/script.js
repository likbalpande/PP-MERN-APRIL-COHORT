// truth value: 1, -1, ' ',

// falsy value: 0, '', null, undefined

// const flag = 1;
// if(flag){
//     console.log('Yes');
// }
// else{
//     console.log('No');
// }

// const c = 'A';
// switch(c){
//     case 'A': {
//         console.log("It is first character");
//         break;
//     };
//     case 'B': {
//         console.log("It is second character");
//         break;
//     }
//     case 'C': {
//         console.log("It is third character");
//         break;
//     }
//     default: {
//         console.log("It is not A,B,C");
//     }
// }



// object

// const obj = new Object();
// const obj = {};
// everything in object is stored in key value pair

// ex1231
// let student = {
//     key: "value",
//     name: 'Ajay',
//     rollNo: '24001',
// };

// student.city = 'Jaipur';
// student.height = '5.10 ft';

// // ex1231
// let x = prompt("Give me the key");

// student[x] = 'New value';

// console.log(student);


// for non-primitive datatypes, 
// the reference is also checked

// const std1 = {
//     name: 'Ajay',
//     age: 25,
// };


// // making a new object for the older key value pairs
// const std2 = {...std1};
// std2.age = 26;
// // const std2 = {
// //     name: 'Ajay',
// //     age: 26
// // };

// //... --> Spread / Rest operator

// if(std1===std2){
//     console.log("Yes");
// }
// else{
//     console.log("No");    
// }

// console.log(std1)
// console.log(std2)

// const str = 'hello';
// const abc = 'hello';


// const o = {
//     h:'hello',
//     a:'1',
//     b:1,
//     c:2,
//     2:'two',
// }

// o.d = 0

// console.log(o[2]);




// array
// csv
// const arr = [1, 2,'Hello', "New", {name: 'John'}];

// arr[2] = 'String new';

// console.log(arr[2]);
// const arr1 = [1,2];
// // const arr2 = arr1;
// const arr2 = [...arr1];
// // arr2[30] = "done";
// arr2.push('done');
// arr2.push('done');

// console.log("\n✅ : arr1:", arr1)
// console.log("\n✅ : arr2:", arr2)

// if(arr1===arr2){
//     console.log('Yes');
// }
// else{
//     console.log('No');
// }

// const obj = {};
// console.log(typeof(obj));
// console.log(typeof(arr1));
// console.log(Array.isArray(obj));
// console.log(Array.isArray(arr1));

// for(let i=0; i<arr2.length; i++){
//     console.log(arr2[i]);
// }


//DOM Manipulation
// document.body.style.backgroundColor = "yellow";

// // document.getElementById('h22').style.color = 'red';
// // document.getElementById('h22').style.margin = '12px';

// const secondTitle = document.getElementById('h22');
// console.log(secondTitle);
// // secondTitle.style.color = 'red';
// // secondTitle.style.margin = '12px';

// const para = document.getElementsByClassName('p11');
// console.log(para);

// const headings = document.getElementsByTagName('p');
// headings[2].style.backgroundColor = 'aqua';
// console.log(headings);





// const paras = document.getElementsByTagName('p');
// console.log(paras);
// paras[1].style.backgroundColor = 'yellow';

// const paras = document.getElementById('p01');
// console.log(paras);
// paras.style.backgroundColor = 'aqua';

// const res = document.querySelectorAll('p');
// console.log(res);
// res[2].style.backgroundColor = 'aqua';
// console.log(res);


// const root = document.getElementById('root');
// const list = document.createElement('ul');
// const li1 = document.createElement('li');
// li1.innerText = 'item1';
// list.appendChild(li1);
// const li2 = document.createElement('li');
// li2.innerText = 'item2';
// list.appendChild(li2);
// root.appendChild(list);



// function func1(e){
//     console.log('input : ',e.target.value);
// }

// function func2(e){
//     console.log('button clicked: ',e);
// }



