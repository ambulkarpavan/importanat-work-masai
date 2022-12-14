document.querySelector("form").addEventListener("submit",myfunction)

let arr=JSON.parse(localStorage.getItem("Products")) || [];

function product(n,c,i,p,g,s){
this.name=n,
this.catagory=c,
this.image=i,
this.price=p,
this.gender=g,
this.sold=s

}
 

function myfunction(e){
    e.preventDefault();


  let  name=document.querySelector("#name").value;
  let  catagory=document.querySelector("#category").value;
  let  image=document.querySelector("#image").value;
  let  price=document.querySelector("#price").value;
  let  gender=document.querySelector("#gender").value;
  let  sold=document.querySelector("#sold").checked;

  let p1= new product(name,catagory,image,price,gender,sold);
 arr.push(p1);
 console.log(arr)
 localStorage.setItem("Products",JSON.stringify(arr))
 
}





