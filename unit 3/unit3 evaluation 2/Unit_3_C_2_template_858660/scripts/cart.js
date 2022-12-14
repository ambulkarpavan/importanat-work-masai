

let adddata=JSON.parse(localStorage.getItem("items"))||[]
console.log(adddata);

let total= adddata.reduce(function(sum,ele){
    return sum += ele.price
},0)
console.log(total)
document.querySelector("#cart_total").innerText=`${total}`

adddata.map(function(ele,i){
    
    let box=document.createElement("div")

    let image=document.createElement("img")
    image.src= `${ele.image}`
    
    let name=document.createElement("p")
    name.innerText=`Name : ${ele.name}`
    
    let price=document.createElement("p")
    price.innerText=`Price : ${ele.price}`

    let button=document.createElement("button")
    button.innerText="Remove"
    button.id="remove"
    button.addEventListener("click",function(){
        removeitem(ele,i)
    })
    
    box.append(image,name,price,button);
    
    document.querySelector("#cart").append(box)
})

function  removeitem(ele,i){

    adddata.splice(i,1)
    console.log(adddata)
    localStorage.setItem("items",JSON.stringify(adddata))
    window.location.reload();
}


