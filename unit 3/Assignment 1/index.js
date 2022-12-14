//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )



//Information should be retrieved from localstorage only, avoid hard coding data.

//localstorage data start
  
var scope={
  Title:"Scope",
  l1: "Scope in JavaScript refers to the accessibility or visibility of variables.",
  l2:"There are three types of scope",
  l3:"Global scope : When you execute a script, the JavaScript engine creates a global execution context.",
  l4: "Local scope : Variables that you declare inside a function are local to that function. They are called Local Variables and can’t be accessed in Global Scope.",
  l5: "Block scope :  Variables that you declare inside a block {} using let or const are limited only to that block."
  
   }

   localStorage.setItem("scope",JSON.stringify(scope));

      var hoisting={
       Title:"Hoisting",
       l1: "Hoisting is JavaScript's default behavior of finding variables and function declarations before actually executing the program",
       l2:"It doesn't care about variable values. All it wants to know what variables are present in a program.",
     
       
        }

        localStorage.setItem("hoisting",JSON.stringify(hoisting));

        var constructorfunctions={
         Title:"Constructor Functions",
         l1: "We can create objects in Js using functions as well.",
         l2:"Constructor function helps you add properties on other objects as well",
         l3:"Now we have seen the basics of 'this' and the significance of 'new' keyword in Js. But 'this' can do more for us.",
        
         
          }
  
          localStorage.setItem("constructorfunctions",JSON.stringify(constructorfunctions));


          var prototype={
           Title:"Prototype",
           l1: "A blueprint",
           l2:"An original object from which a new object is created.",
           l3:"In simple terms, inheritance is the concept of one thing gaining the properties or behaviors of something else.",
         
            }
    
            localStorage.setItem(" prototype",JSON.stringify( prototype));
 

   //localstorage data end

   //scope start

  const scopedata=JSON.parse(localStorage.getItem("scope")) ||[];
   console.log(scopedata);
   
   
   function scopeinfo(){

  

     document.querySelector("#box").innerHTML=null
    
   let b1=document.createElement("div")
   
   let n1=document.createElement("h3")
         n1.innerText=scopedata.Title
            
   let n2=document.createElement("p")
     n2.innerText=scopedata.l1
   
     let n3=document.createElement("p")
     n3.innerText=scopedata.l2
   
     let n4=document.createElement("p")
     n4.innerText=scopedata.l3
   
     let n5=document.createElement("p")
     n5.innerText=scopedata.l4
   
     let n6=document.createElement("p")
     n6.innerText=scopedata.l5


     let iframe=document.createElement("iframe")
     iframe.src="https://www.youtube.com/embed/bD-62OMzni0"
     iframe.width= "60%";
     iframe.height= "300px";
     iframe.allow="fullscreen";
   
         
   b1.append(n1,n2,n3,n4,n5,n6,iframe)
    document.querySelector("#box").append(b1);

 
   
   }


//scope end

// hoisting start

const hoistingdata=JSON.parse(localStorage.getItem("hoisting")) ||[];
console.log(hoistingdata);


function hoistinginfo(){
  document.querySelector("#box").innerHTML=null;
 
let b1=document.createElement("div")

let n1=document.createElement("h3")
      n1.innerText=hoistingdata.Title
         
let n2=document.createElement("p")
  n2.innerText=hoistingdata.l1

  let n3=document.createElement("p")
  n3.innerText=hoistingdata.l2

  let iframe=document.createElement("iframe")
  iframe.src="https://www.youtube.com/embed/AplVrrwY1TI"
  iframe.width= "60%";
  iframe.height= "300px";
  iframe.allow="fullscreen";

      
b1.append(n1,n2,n3,iframe)
 document.querySelector("#box").append(b1);

}
// hoisting end

//constructor functions start

const constructorfunctionsdata=JSON.parse(localStorage.getItem("constructorfunctions"))||[];
console.log(constructorfunctionsdata);


function constructorfunctionsinfo(){
  document.querySelector("#box").innerHTML=null
 
let b1=document.createElement("div")

let n1=document.createElement("h3")
      n1.innerText=constructorfunctionsdata.Title
         
let n2=document.createElement("p")
  n2.innerText=constructorfunctionsdata.l1

  let n3=document.createElement("p")
  n3.innerText=constructorfunctionsdata.l2

  let n4=document.createElement("p")
  n4.innerText=constructorfunctionsdata.l3

  let iframe=document.createElement("iframe")
     iframe.src="https://www.youtube.com/embed/23AOrSN-wmI"
     iframe.width= "60%";
     iframe.height= "300px";
     iframe.allow="fullscreen";

      
b1.append(n1,n2,n3,n4,iframe)
 document.querySelector("#box").append(b1);

}

//constructor functions end


//prototype start

const prototypedata=JSON.parse(localStorage.getItem(" prototype"))||[];
console.log(prototypedata);


function prototypeinfo(){

  document.querySelector("#box").innerHTML=null
 
let b1=document.createElement("div")

let n1=document.createElement("h3")
      n1.innerText=prototypedata.Title
         
let n2=document.createElement("p")
  n2.innerText=prototypedata.l1

  let n3=document.createElement("p")
  n3.innerText=prototypedata.l2

  let n4=document.createElement("p")
  n4.innerText=prototypedata.l3

  let iframe=document.createElement("iframe")
  iframe.src="https://www.youtube.com/embed/kCb8HVgMzMo" 
  iframe.width= "60%";
  iframe.height= "300px";
  iframe.allow="fullscreen";

      
b1.append(n1,n2,n3,n4,iframe)
 document.querySelector("#box").append(b1);

}