// var arr = [1, 2, 3, 4]
// console.log(arr.filter())

// for(let i=0; i<10;i++){

// }
// console.log(i)

// function sum(){
//     let a=b=10;
//     console.log(a);
//     return a
// }
// sum();
// console.log(a)
// console.log(b)

// sum1();
// sum();

// function sum1(){
//     console.log("a")
// }
// function sum(){
//     console.log("b")
// }

// let arr =[1,6,7,8,9];

// let newarr = arr.map(function(el,i) {
//     return i%2==0
// })
// console.log(newarr)


// function func(param){
//     console.log(1);
//     return function(){
//         console.log(2);
//         param();
//         return function(){
//             console.log(4);
//             return 5
//         }
//     }
// }
// func(function(){
//     console.log(3)
// })()()

// let my = [null, 1, 5, undefined];

// let y = my.reduce((el) =>{
//     return el != undefined
// })


// var func1 = function func2(){
//     console.log(1)
// }
// func1();
// func2();

// var arr=[1];
// arr.reduce((a,b) =>{
//     console.log(a);
//     console.log(b)
// })

// const obj ={
//     a:10,
//     b:10
// }
// obj.c = 20;
// obj.a = 20
// console.log(obj)

// console.log(a);
// var a =10;
// console.log(b);
// let b= 20

// let arr = [0, 0, 0, 0];
// console.log(arr.filter((el) =>{
//     return el
// }))

// var a =10;
// let b = 10;
// var c =true;
// if(c === true){
//    var a = 20
//    let b = 25
// }

// console.log(a);
// console.log(b)

// var arr = [1, 2,3,4];
// var newarr = [];
// arr.forEach((el,ind) =>{
//     newarr.push(el);
//     if(ind === 1){
//         break;
//     }
// })
// console.log(arr)

var arr = [1, 2,3,4];
var newa = arr.map((el) =>{
    el*6
})
console.log(newa)