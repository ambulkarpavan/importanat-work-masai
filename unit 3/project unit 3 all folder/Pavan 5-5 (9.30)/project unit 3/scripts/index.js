

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

        let location= document.getElementById("inputbox1").value ;
        let checkinDate= document.getElementById("inputbox2").value ;
        let checkoutDate= document.getElementById("inputbox3").value ;
        let totalTravellers= document.getElementById("inputbox4").value ;

        let travelDetails={
            location:location,
            checkinDate:checkinDate,
            checkoutDate:checkoutDate,
            totalTravellers:totalTravellers,
        }
        localStorage.setItem("travelDetails",JSON.stringify(travelDetails));

        console.log(travelDetails)  
      }

    /* chages here start */

      let find_city_country= async ()=>{
        let query= document.querySelector("#inputbox1").value;

        let url= `http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=shivambais`

        let res= await fetch(url)

        let data= await res.json()

        let reqData= data.geonames;
        console.log(reqData)

        ////map
        // //showMapFunction();

        document.querySelector('#location_suggestion_div').style.display = "block";

        // //console.log(data)   location_suggestion_div

        document.querySelector("#location_suggestion_div").innerHTML=null;
        reqData.forEach((ele)=>{
            let location= document.createElement("p");
            location.innerText= ele.name+","+ele.countryName;

            location.addEventListener("click",()=>{
                document.querySelector("#inputbox1").value =null;
                // //document.getElementById("location_suggestion_div").style.display = "block";
                document.querySelector("#inputbox1").value =  ele.name+","+ele.countryName;
                //// document.querySelector("#location_suggestion_div").innerHTML=null;
                document.getElementById("location_suggestion_div").style.display = "none";
            })
            document.querySelector("#location_suggestion_div").append(location)
        })
        }

        let timeoutVar;
        let debounce=(fun,time)=>{
            if(timeoutVar){
                clearTimeout(timeoutVar);
            }

            timeoutVar = setTimeout(fun,time)
        }

     document.querySelector("#inputbox1").addEventListener("input",()=>{debounce(find_city_country,700)})

        /* chages here end */


     
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

    

    
 /* chages here start */

    let find_city_country= async ()=>{
        let query= document.querySelector("#inputbox1").value;

        let url= `http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=shivambais`

        let res= await fetch(url)

        let data= await res.json()

        let reqData= data.geonames;
        console.log(reqData)

        ////map
        // //showMapFunction();

        document.querySelector('#location_suggestion_div').style.display = "block";

        // //console.log(data)   location_suggestion_div

        document.querySelector("#location_suggestion_div").innerHTML=null;
        reqData.forEach((ele)=>{
            let location= document.createElement("p");
            location.innerText= ele.name+","+ele.countryName;

            location.addEventListener("click",()=>{
                document.querySelector("#inputbox1").value =null;
                // //document.getElementById("location_suggestion_div").style.display = "block";
                document.querySelector("#inputbox1").value =  ele.name+","+ele.countryName;
                //// document.querySelector("#location_suggestion_div").innerHTML=null;
                document.getElementById("location_suggestion_div").style.display = "none";
            })
            document.querySelector("#location_suggestion_div").append(location)
        })
        }

        let timeoutVar;
        let debounce=(fun,time)=>{
            if(timeoutVar){
                clearTimeout(timeoutVar);
            }

            timeoutVar = setTimeout(fun,time)
        }

     document.querySelector("#inputbox1").addEventListener("input",()=>{debounce(find_city_country,700)})

      /* chages here ends */