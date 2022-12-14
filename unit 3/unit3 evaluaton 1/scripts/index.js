//store the products array in localstorage as "data"
document.querySelector("#product_form").addEventListener("submit",submitdata);

let arr= JSON.parse(localStorage.getItem("data")) || [];

function product(b,n,p,i){
    this.brand=b,
    this.name=n,
    this.price=p,
    this.image=i

}


function submitdata(){
event.preventDefault();

let brand=document.querySelector("#product_brand").value ;
let name=document.querySelector("#product_name").value ;
let price=document.querySelector("#product_price").value ;
let image=document.querySelector("#product_image").value ;

let p1= new product(brand,name,price,image);

arr.push(p1);
console.log(arr);

localStorage.setItem("data",JSON.stringify(arr))

}