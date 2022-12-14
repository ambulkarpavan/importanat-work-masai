import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

import { getdata,append } from "./fetch1.js";

document.getElementById("btn").addEventListener("click",get);

function get(){
   
    let reciepe= document.getElementById("search").value;

    let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${reciepe}`;
       
 
    let container= document.getElementById("products");
    container.innerHTML=null;
   

    getdata(url).then((res) =>{

        append(res,container)
    })

}

   

