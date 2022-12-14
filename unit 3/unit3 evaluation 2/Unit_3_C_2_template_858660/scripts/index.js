// Store cart items in local storage with key: "items"


const url=`https://grocery-masai.herokuapp.com/items`;

fetch(url)
.then(function(res){
   // console.log(res)
   return res.json();
})
.then(function (res){
    append(res)
    console.log(res)
})
.catch(function(err){
    console.log(err);
})


let cartdata=JSON.parse(localStorage.getItem("items"))||[]

let length=cartdata.length;

document.querySelector("#item_count").innerText=`${length}`

function append(datanew){
   let abc=datanew.data;
  
  // console.log(abc)
  abc.map(function(ele){

    let box=document.createElement("div")

    let image=document.createElement("img")
    image.src= `${ele.image}`
    
    let name=document.createElement("p")
    name.innerText=`Name : ${ele.name}`
    
    let price=document.createElement("p")
    price.innerText=`Price : ${ele.price}`

    let button=document.createElement("button")
    button.innerText="Add to cart"
    button.id="add_to_cart"
    button.addEventListener("click",function(){
        additem(ele)
    })
    
    box.append(image,name,price,button);
    
    document.querySelector("#items").append(box)

  })
}

  function additem(ele){
      console.log(ele)
       cartdata.push(ele);
       //console.log(cartdata)
      localStorage.setItem("items",JSON.stringify(cartdata))
      console.log(cartdata)
      alert("Item added to cart")
      window.location.reload()
  }
