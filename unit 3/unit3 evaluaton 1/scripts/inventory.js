let productdata= JSON.parse(localStorage.getItem("data")) || [];
console.log(productdata);

productdata.map(function(ele,i){

    let box=document.createElement("div")

    let brand=document.createElement("p")
     brand.innerText= "Brand Name :"+" "+ele.brand 
    
    let name= document.createElement("p")
      name.innerText= "Product Name :"+" "+ele.name

    let price= document.createElement("p")
     price.innerText= "Product Price :"+" "+ele.price

    let image= document.createElement("img")
     image.src=ele.image

    let button = document.createElement("button")
    button.innerText="Remove Product";

    button.addEventListener("click",function(){
         removebut(ele,i)
    });

     box.append( image,brand,name,price,button);

     document.querySelector("#products_data").append(box)
});
 
function removebut(ele,i){
    productdata.splice(i,1)
   localStorage.setItem("data",JSON.stringify(productdata));
   window.location.reload();
   console.log(productdata);

}