import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML= navbar();



//    let getdata= async () => {


//     try{

//         let res= await fetch("https://fakestoreapi.com/products/category/jewelery")
//         let data= await res.json();

//         append(data);
//         console.log(data)

//     }catch(err){
//         console.log(err)
//     }
// }
// getdata();

// let append = (data) => {

//     let container = document.getElementById("container")

//     data.forEach( ({title}) => {
//         let p=document.createElement("p");
//         p.innerText= title;

//         container.append(p);
//     })
// }


let url="https://fakestoreapi.com/products/category/jewelery"

let container=document.getElementById("container");

import {getdata, append } from "./fetch.js" ;

getdata(url).then((res) => {
    append(res,container)
})