// console.log("hello");

// function test(){
//     let a = 10;
//     setTimeout(()=>{a=100}, 10000);
//     return function abc(){
//         console.log('Hello a =', a);
//         function xyz(){
//             console.log('xyz xyz...');
//         }
//         return xyz;
//     }
// }

// const y = test()();

// y();

// setTimeout(y, 11000);




// let cnt = 10;
// const callAPI = (val) => {
//     if(cnt>0){
//         console.log(`Server : {${val}} 🚨🚨🚨`, cnt);
//         cnt--;
//     }
//     else{
//         console.log('⭕️...❌❌❌❌❌...⭕️');
//     }
// }

// const debounce = (fn, time) => {
//     let timer = true;
//     return (...val)=>{
//         if(timer){
//             fn(...val);
//             timer=false;
//             setTimeout(()=>timer=true, time);
//         }
//     }
// };
// const debouncedCallAPI = debounce(callAPI, 1500);

// const input = document.getElementById('#input');
// input.addEventListener('keyup', (e)=>{
//     debouncedCallAPI(e.target.value);
// })

const throttle = (fn, type, val) => {
    switch(type){
        case 'time-first': {
            let flag = true;
            return (...args)=>{
                if(flag){
                    fn(...args);
                    flag = false;
                    setTimeout(()=>flag = true, val);
                }
            }
        };
        case 'time-last': {
            let timer;
            return (...args)=>{
                clearTimeout(timer);
                timer = setTimeout(()=>fn(...args), val);
            }
        };
        case 'count': {
            let count = 0;
            return (...args)=>{
                if(count % val==0){
                    fn(...args);
                    
                }
                count ++;
            }
        };
    }
}

const shoot = (x) => {
    console.log('--> 💥', x);
}

const shootAndReload = throttle(shoot, 'time-first', 5000);
const waitToShoot = throttle(shoot, 'time-last', 2000);
const shootAndThink = throttle(shoot, 'count', 5);

document.getElementById('btn1').addEventListener('click', ()=>shootAndReload('...🚀...'));
document.getElementById('btn2').addEventListener('click', ()=>waitToShoot('...💣'));
document.getElementById('btn3').addEventListener('click', ()=>shootAndThink('⚙️🪓⚙️'));
