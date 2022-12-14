document.querySelector("form").addEventListener("submit", handleSubmit);

var arr =[]
function handleSubmit(){
    event.preventDefault()
  var obj = {
    name : document.querySelector("#name").value,
    email : document.querySelector("#email").value ,
    password: document.querySelector("#password").value
  }
//    let emailval = obj.email;
//    for(let i=0; i<emailval.length; i++){
//    if(emailval[i] === "@" && emailval[i+1] === "."){
//     alert("Domain can not start with dot[.]")
//    }
//    }
let passwordval = obj.password;
if(passwordval.length < 7){
    alert("Length of password should be greater than 6.")
}
if(passwordval[0] )
for(let i=0; i<passwordval.length; i++){
if(emailval[i] === "@" && emailval[i+1] === "."){
 alert("Domain can not start with dot[.]")
}
}
  console.log(obj.email);
  arr.push(obj)
  console.log(arr);


}