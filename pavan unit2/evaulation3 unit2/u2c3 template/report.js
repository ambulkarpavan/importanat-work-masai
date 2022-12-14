// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("#formtag").addEventListener("submit", datainfo())


function datainfo(){
event.preventDefault();
var img=document.querySelector("image").value;
// img.src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png";
var name=document.querySelector("name").value;
var batch=document.querySelector("batch").value;
var dsa=document.querySelector("dsa").value;
var cs=document.querySelector("cs").value;
var coding=document.querySelector("coding").value;
//console.log(img,name,dsa,batch,cs,coding)

var trow=document.createElement("tr")

var td1=document.createElement("td")
td1.innerText="img"
var td2=document.createElement("td")
td2.innerText="name"
var td3=document.createElement("td")
td3.innerText="batch"
var td4=document.createElement("td")
td4.innerText="dsa"
var td5=document.createElement("td")
td5.innerText="cs"
var td6=document.createElement("td")
td6.innerText="coding"
// var td7=document.createElement("td")
// td7.innerText="((td4+td5+td6)/3)*100";

// var td8=document.createElement("td")
// if(td7.innerText>50){
//     td8.innertex="Regular";
//     td8.style.backgroundColor="Green"
// }
// else {
//     td8.innerText="Async"
//     td8.style.backgroundColor="Red"
// }



trow.append(td1,td2,td3,td4,td5,td6);
document.querySelector("tbody").append(trow);



}