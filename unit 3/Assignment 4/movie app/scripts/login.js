document.querySelector("form").addEventListener("submit",loginfn)

var userdata=JSON.parse(localStorage.getItem("data"))
console.log(userdata);

    function loginfn(){
        event.preventDefault();
        var enteremail=document.querySelector("#email").value
        var enterpass=document.querySelector("#password").value
        

        let flag=false;
        for(var i=0;i < userdata.length;i++){
            if(userdata[i].email==enteremail && userdata[i].password==enterpass){
                flag=true;
                break;
                
               }
            }
            if(flag===true){
                alert("Login Successful");
                window.location.href="index.html";
               
            }
            else{
                alert("invalid Credentials");
                

            }


           

            
            

        
    }