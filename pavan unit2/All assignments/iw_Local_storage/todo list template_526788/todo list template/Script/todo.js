var gettododata=JSON.parse (localStorage.getItem("tododata"))
console.log(gettododata);

var completedata=JSON.parse(localStorage.getItem("todocompleted")) || []

gettododata.map(function(el){
    var tr =document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=el.itemname
    var td2=document.createElement("td")
    td2.innerText=el.itemqty
    
    var td3=document.createElement("td")
    td3.innerText=el.itemprior

    var td4=document.createElement("p")
    td4.textContent="completed"
    td4.style.textAlign="center"
    td4.style.color="red"
    td4.style.cursor="pointer"
    td4.addEventListener("click",function(){
        markcompleted(el);
    })

  

    
    tr.append(td1,td2,td3,td4)
    
    document.querySelector("#body").append(tr)
    
})
function markcompleted(el){
    //console.log(el)
    completedata.push(el);

    localStorage.setItem("todocompleted",JSON.stringify(completedata) )
}
