
// finding wheather by city start
 // src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" 


 function getdata(){
     let city=document.getElementById("city").value;

     const url=
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d3dc3a40a0365849659fef0ecf259eb9`

      fetch(url)
      .then(function(res){
          //console.log(res)
          return res.json();
      })
      .then(function(res){
        append(res);
           console.log(res);
         
      })
      .catch(function(err){
          console.log(err);
      });
 }

 function append(data){
     let container=document.getElementById("container");
     let map=document.getElementById("gmap_canvas");
     container.innerHTML=null;

     let city=document.createElement("p");
     city.innerText= `city : ${data.name}`;

     let min=document.createElement("p");
     min.innerText=`Min_temp : ${data.main.temp_min}`;

     let max=document.createElement("p");
     max.innerText=`Max_temp : ${data.main.temp_max}`;

     let current=document.createElement("p");
     current.innerText=`current_temp : ${data.main.temp}`;

     let humidity=document.createElement("p");
    humidity.innerText=`Humidity : ${data.main.humidity}`;

    container.append(city,min,max,current,humidity);
    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
 }

// finding wheather by city end

// finding wheather by location start

function getDataLocation(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5881c4a70f1f474bc5289105d70aa1b5`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

 function getwhether(){
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
       var crd = position.coords;
     
       console.log('Your current position is:');
       console.log(`Latitude : ${crd.latitude}`);
       console.log(`Longitude: ${crd.longitude}`);
       console.log(`More or less ${crd.accuracy} meters.`);

       getDataLocation(crd.latitude, crd.longitude);
     }

 }
 