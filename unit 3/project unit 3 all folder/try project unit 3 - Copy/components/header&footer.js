function header(){

    return`
    
    <div id="headerbox1">
    <a href="index.html"> <img
            src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"></a>
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
<a href="#"><i class="fa-solid fa-globe"></i><label>English</label></a>
<a href="#"><label>Support</label></a>
<a href="#"><label>Trips</label></a>
<a href="#" id="after_signin"><label>Sign in</label></a>

</div>



<div id="display_aftersiginDropdown">

<div id="after_signinDropdownUpperDiv">
<h4 id="siginUserName"></h4>
<p id="signinUserEmail"></p>
<button id="blue_member"><a href="">Blue Member</a> </button>
<h4 id="RS">Rs.0.00</h4>
<button id="points_value"> <a href="">Points value <span id="pointsvalue_span">i</span> </a> </button>

</div>


<hr>
<p>Account</p>
<p>List of Favourites</p>
<p>Feedback</p>
<hr>
<p><a href="index.html">Sign out</a></p>

</div>
    
    `
}


function footer(){

    return`
    

    <div id="footerbox1">
    <p id="p1">Plan ahead and save</p>
    <p>Books 60 days in advance for 20% off select stays.</p>

  </div>
  <div id="footerbox2">
    <div id="footerbox2a">
      <img src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg">
    </div>
    <div id="footerbox2b"> 
      <h2>Members get more on the app</h2>
      <p  id="para1">Earn double Expedia Rewards points when you book on the app, plus get travel alerts and manage your bookings on the go.</p>
      <h3>Text yourself a download link for easy access</h3>
      <input type="number" placeholder="Country code">
      <input type="number" placeholder="Phone number">
     <button  id="footer_submit"> Get the app</button>
      <p id="para2">By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
    </div>
    <div id="footerbox2c">
      <img src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_HP.png" >
      <p>Scan the QR code</p>
    </div>
  </div>
  <div id="footerbox3">
   <div id="footerbox3a">
     <p>Explore a world of travel with Expedia</p>
     <a href="#">Discover new places and experiences</a>
   </div>

    <div id="footerbox3b">

     <div>
       <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="">
     </div>
     <div>
       <p>Company</p>
       <a href="#">About us</a><br>
       <a href="#">Jobs</a><br>
       <a href="#">List your property</a><br>
       <a href="#">Partnerships</a><br>
     </div>
     <div>
       <p>Explore</p>
       <a href="#">India travel guide</a><br>
       <a href="#"> Hotels in India</a><br>
       <a href="#">Holiday rentals in India</a><br>
       <a href="#"> Holiday packages in India</a><br>
       <a href="#"> Domestic flights</a><br>
       <a href="#">Car hire in India</a><br>
       <a href="#">   All accommodation types  </a><br>
       <a href="#">  Travel blog</a><br>
     </div>
     <div>
       <p>Terms and policies</p>
       <a href="#"> Privacy Statement</a><br>
       <a href="#">Terms of use</a><br>
       <a href="#">Vrbo terms and conditions</a><br>
     </div>
     <div>
       <p>Help</p>
       <a href="#"> Support</a><br>
       <a href="#">Change or cancel your booking</a><br>
       <a href="#">Refund process and timelines</a><br>
       <a href="#">Book a flight using an airline credit</a><br>
       <a href="#">International travel documents</a><br>
     </div>
    </div>
   </div>

   <div id="footerbox4">
     <img src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" >
     <p>© 2022 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.</p>

 </div>
    
    
    `
}

export {header,footer};