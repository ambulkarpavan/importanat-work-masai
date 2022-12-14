var completetodo=JSON.parse(localStorage.getItem("todocompleted"))
console.log(completetodo)

completetodo.map(function(el){

    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=el.itemname

    var td2=document.createElement("td")
    td2.innerText=el.itemqty

    var td3=document.createElement("td")
    td3.innerText=el.itemprior

    tr.append(td1,td2,td3);
    document.querySelector("#body").append(tr)

})