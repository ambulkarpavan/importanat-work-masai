// url = https://api.unsplash.com/search/photos?query=${value}&per_page20&?client_id=ogzEFtK7OXbiaRsHHVTAp79IWIP6XiRJwKoQzdVLRco

// https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=YOUR_ACCESS_KEY

const api ="ogzEFtK7OXbiaRsHHVTAp79IWIP6XiRJwKoQzdVLRco"

import{navbar} from "../components/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML=navbar();

import {searchimages,append} from "../scripts/fetch.js"

let search =(e) => {
    if(e.key==="Enter"){
        let value=document.getElementById("query").value;
       searchimages(api,value).then((data)=>{
        console.log(data);
let container=document.getElementById("container")
container.innerHTML=null;
        append(data.results,container)
      });
      
    }
};

document.getElementById("query").addEventListener("keydown",search);



let categories = document.getElementById("categories").children;



function csearch() {
    console.log(this.id);
    searchimages(api,this.id).then((data)=>{
        console.log(data);
let container=document.getElementById("container")
container.innerHTML=null;
        append(data.results,container)
      });
}
for(let el of categories){
    el.addEventListener("click",csearch);
}


// let searchimages = async () =>{
//     let value=document.getElementById("query").value;

//     try{
//         let res = await fetch(
//             `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${api}`
//         );
// let data = await res.json();
// console.log(data)
//      }catch(err){
//          console.log(err)
//      }
// };


