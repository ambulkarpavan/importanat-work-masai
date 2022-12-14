import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML= navbar();

// let getdata= async () => {


//     try{

//         let res= await fetch("https://fakestoreapi.com/products/category/electronics")
//         let data= await res.json();

//         append(data);
//         console.log(data)

//     }catch(err){
//         console.log(err)
//     }
// }
// getdata();

// let append = (data) => {

//     let products = document.getElementById("products")

//     data.forEach( ({title}) => {
//         let p=document.createElement("p");
//         p.innerText= title;

//         products.append(p);
//     })
// }



let url="https://fakestoreapi.com/products/category/electronics"

let container=document.getElementById("products");

import {getdata, append } from "./fetch.js" ;

getdata(url).then((res) => {
    append(res,container)
})

