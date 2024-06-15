// console.log("Hello world!");

// var, let, const

// var ext = "Again JS";
// function abc(){
//     var ext = "Something...";
//     console.log(ext);
//     var count = 'Hello';
//     console.log(count);
//     //re-declaration
//     var count = "again";
//     //re-assignment
//     count = 10;
//     console.log(count);
// }
// abc();
// console.log(count);




// //cannot access it before initialization
// let count = 0;
// console.log(count);
// //re-declaration is not allowed
// // let count = 4;
// //re-assignment is allowed
// count = "hello";
// console.log(count);

// block scoped? --> { } 
// ex. if(){...}, for(){...}

// {
//     let i = 0;
// }
// console.log(i);



// difference between let and const is that 
// const variable need to be initialized during declaration and they cannot be reassigned
// {
//     const count = 0;
//     // count = 1;
//     console.log(count);
// }


// let userName = "John"; //ex1123
// console.log("userName:", userName)

// userName = "Johnson"; //jasda12312
// console.log("userName:", userName)

// let age = 10;
// let uName = "John";
// console.log(typeof(uName));


// camelCase
// cannot have number/hyphen in start (no space anywhere)
// const _ = 10;
// console.log(_);



// type coercion
// const firstName = "John";
// const lastName = "Cena";
// const fullName = firstName+' '+lastName;
// console.log(fullName);

// let res = 1 + 1 + "hello" + 1 + 1 + "Done";
// console.log(res);
// res = true+1;
// console.log(res);
// res = "A"+true+1;
// console.log(res);

// let res =  '2.10' - '1';
// console.log(res);
// res =  '200' / '40';
// console.log(res);
// res =  '20' * '4';
// console.log(res);


// // loose equality
// // it checks after doing type coercion 
// if(10=='10'){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

// // strict equality
// // it checks without type coercion 
// if(10==='10'){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }
// for objects and arrays, it will check the equality on type and reference / address


// const firstName = "John";
// const lastName = "Cena";
// const fn1 = firstName+' '+lastName;
// // ES6 template literals format
// const fn2 = `${firstName} ${lastName}`;
// console.log(fn1);
// console.log(fn2);


// // function definition
// function print(){
//     console.log("Hello");
// }
// //function invocation
// print();


// // parameters
// function print(x,y,z){
//     console.log("Hello");
//     const res = x+y+z;
//     console.log(res);
// }
// //passing arguments
// print(1,2,3);


// // default
// function print(x=0,y=0,z=0){
//     console.log("Hello");
//     const res = x+y+z;
//     console.log(res);
// }
// //passing arguments
// print(1,2,3);
// print(1,2);
// print(2);
// print();


// function sum(a,b){
//     return a+b;
// }
// const res = sum(10,12);
// console.log(res);




// console.log(print1);
// print1(100);
// function definition
// function print1(x){
//     console.log("Value is:",x);
// }
// function print1(x){
//     console.log("Answer is:",x);
// }
// print1(10);

// // function assignment (named function assignment)
// const print2 = function printHello(x){
//     console.log("Value is:",x);
// }
// print2(10);
// // printHello(100);


// // function assignment (anonymous function assignment)
// const print3 = function (x){
//     console.log("Value is:",x);
// }
// print3(10);


// function assignment (arrow function assignment)
// const print4 = (x)=>{
//     console.log("Value is:",x);
// }
// print4(10);




const print = (x) => {
    if(x==1){
        console.log(1);
    }
    else{
        console.log(x);
        print(x-1);
    }
}
print(10);


function printF(x){
    if(x==1){
        console.log(':',1);
    }
    else{
        console.log(':',x);
        printF(x-1);
    }
}
printF(10);









