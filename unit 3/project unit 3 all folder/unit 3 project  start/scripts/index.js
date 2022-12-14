

    import {stays,flights,cars,packages,thingstodo} from "../components/fetch.js";

    import { homePageSiginDropdown } from "../components/signin_dropdown.js"    //import of sign in dropdown
    
 

    function stays1(){
        document.getElementById("flights_button").style.color="black"  
        document.getElementById("cars_button").style.color="black"
        document.getElementById("packages_button").style.color="black"
        document.getElementById("thingstodo_button").style.color="black"
        
        document.getElementById("stays_button").style.color="blue"

        document.getElementById("homepagebox1_b").innerHTML=null;

        document.getElementById("homepagebox1_b").innerHTML=stays();

        
      function searchlocation(){
        console.log("hello")
  let obj={

     location:document.getElementById("inputbox1").value 
  }
        
        console.log(obj)

       
    }
    document.getElementById("inputboxbutton").addEventListener("click",searchlocation)

      }

    //   default code

document.getElementById("homepagebox1_b").innerHTML=stays();

   
document.getElementById("stays_button").addEventListener("click",stays);
   

    function flights1(){

        document.getElementById("stays_button").style.color="black"  
        document.getElementById("cars_button").style.color="black"
        document.getElementById("packages_button").style.color="black"
        document.getElementById("thingstodo_button").style.color="black"
        
        document.getElementById("flights_button").style.color="blue"

        document.getElementById("homepagebox1_b").innerHTML=null;

        document.getElementById("homepagebox1_b").innerHTML=flights();
    }

    function cars1(){

        document.getElementById("homepagebox1_b").innerHTML=null;

        document.getElementById("homepagebox1_b").innerHTML=cars();
    }

    function packages1(){

        document.getElementById("homepagebox1_b").innerHTML=null;

        document.getElementById("homepagebox1_b").innerHTML=packages();
    }

    function thingstodo1(){

        document.getElementById("homepagebox1_b").innerHTML=null;

        document.getElementById("homepagebox1_b").innerHTML=thingstodo();
    }

    document.getElementById("stays_button").addEventListener("click",stays1);

    document.getElementById("flights_button").addEventListener("click",flights1);

    document.getElementById("cars_button").addEventListener("click",cars1);

    document.getElementById("packages_button").addEventListener("click",packages1);

    document.getElementById("thingstodo_button").addEventListener("click",thingstodo1);;




    // signin dropdown

    const displayDropdown = document.getElementById("display_siginDropdown")
    displayDropdown.style.display = "none"
    let hideAndDisplayFunction = () => {

        // document.getElementById("project_homepage").style.marginTop="-200px"
        // displayDropdown.innerHTML = null
        // displayDropdown.style.padding = "20px"

        if (displayDropdown.style.display == "none") {
            displayDropdown.style.padding = "20px"
            displayDropdown.innerHTML = homePageSiginDropdown()
            displayDropdown.style.display = "block"

        }
        else {

            displayDropdown.style.display = "none"

        }

    }

    document.getElementById("signin").addEventListener("click", hideAndDisplayFunction)



    // apivalue

    

