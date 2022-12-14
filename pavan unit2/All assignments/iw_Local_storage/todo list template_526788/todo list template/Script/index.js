document.querySelector("#form").addEventListener("submit", newFunction)

var itemarr=JSON.parse(localStorage.getItem("tododata"))||[]
function newFunction(){
    event.preventDefault();

    var name= document.querySelector("#name").value
    var quantity=document.querySelector("#qty").value
    var prior = document.querySelector("#priority").value

var itemobj={
    itemname:name,
    itemqty:quantity,
    itemprior:prior

}
//console.log(itemobj);
itemarr.push(itemobj);
console.log(itemarr);
localStorage.setItem("tododata",JSON.stringify(itemarr))
}