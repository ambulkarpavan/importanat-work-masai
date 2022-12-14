document.querySelector("form").addEventListener("submit",mydata);

let arr=JSON.parse(localStorage.getItem("data")) || [];

function product(n,c,i,p){
this.name=n,
this.number=c,
this.email=i,
this.password=p
}


function mydata(e){
e.preventDefault();



let  name=document.querySelector("#name").value;
let  number=document.querySelector("#number").value;
let  email=document.querySelector("#email").value;
let  password=document.querySelector("#password").value;

let p1= new product(name,number,email,password);
arr.push(p1);
console.log(arr)
localStorage.setItem("data",JSON.stringify(arr))
location.reload();

if(name==""|| number==""|| email==""|| password==""){
alert("Please fill all details")
location.reload()
}


}