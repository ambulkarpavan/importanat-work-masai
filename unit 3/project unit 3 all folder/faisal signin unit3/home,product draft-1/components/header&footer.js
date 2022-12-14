function header(){

    return`
    
    <div id="headerbox1">
    <a href="index.html"> <img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2" ></a>

  

    <div class="btn-group" >
      <button  style="background-color: white; font-size: 12px; font-weight: 500; color: rgb(56, 51, 51); border: none; text-decoration: none; box-shadow: none;" type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        More travel
      </button>
      <div class="dropdown-menu" id="homeButton_moreTravels">
         <a class="dropdown-item"id="more_stays"  href="products.html">Stays </a>
        <a class="dropdown-item" id="more_flights" href="#">Flights</a>
        <a class="dropdown-item" id="more_cars" href="#">Cars</a>
        <a class="dropdown-item" id="more_packages" href="#">Packages</a>
        <a class="dropdown-item" id="more_things" href="#">Holiday activities</a>
       
        <a class="dropdown-item" href="#">Deals</a>
        <a class="dropdown-item" href="#">Groups & meetings</a>
        <a class="dropdown-item" href="#">Mobiles</a>
    </div>
    </div>
   
  </div>
  <div id="headerbox2">
    <a href="#"><i class="fa-solid fa-globe"></i><label >English</label></a>
    <a href="#"><label>Support</label></a>
    <a href="#"><label>Trips</label></a>
    <a href="#" id="signin"><label>Sign in</label></a>
  </div>

  <div id="display_siginDropdown">
  </div>
    
    `
}


// function footer(){

//     return`
    
    
    
//     `
// }

export {header};