import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();



import { getdata,append } from "./fetch1.js";




   
    

    let url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;
       
 
    let container= document.getElementById("day");
    container.innerHTML=null;
   

    getdata(url).then((res) =>{

        append(res,container)
    })