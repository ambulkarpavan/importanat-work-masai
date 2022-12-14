
 let arr=[]// JSON.parse(localStorage.getItem("info")) || []
function submitdata(){
  
    event.preventDefault();
let obj={
    name:document.querySelector("#name").value,
    number: document.querySelector("#number").value,
    adress: document.querySelector("#address").value

}
arr.push(obj)
console.log(arr)
// localStorage.setItem("info",JSON.stringify(arr))
alert("Your order is accepted ")


 let i=0;
setTimeout(function(){
   alert("Your order is being Packed ")
},3000)
setTimeout(function(){
    alert("Your order is in transit ")
 },8000)
 setTimeout(function(){
    alert(" Your order is out for delivery ")
 },10000)
 setTimeout(function(){
    alert("Order delivered ")
 },12000)


}
