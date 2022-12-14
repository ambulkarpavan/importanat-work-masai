
function moviearr(){
    let movie= document.getElementById("movie").value;
    
        const url=`https://www.omdbapi.com/?t=${movie}&apikey=4cf4e8f7`
    
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
    
    //console.log(data)
    document.getElementById("box").innerHTML=null;
    
    
        let image=document.createElement("img")
        image.src=data.Poster
    
        let release=document.createElement("p")
        release.innerText=`Release Date : ${data.Released}`
    
        let title=document.createElement("p")
        title.innerText=`Movie Name : ${data.Title}`
    
        let ratings=document.createElement("p")
        ratings.innerText=`Ratings : ${data.imdbRating}`
        if(data.imdbRating>8.5){
            ratings.innerText=`Ratings : ${data.imdbRating} =>  Recommended`
        }
    
        let language=document.createElement("p")
        language.innerText=`Language : ${data.Language}`
    
        document.getElementById("box").append(image,title,release,ratings,language)
    
    
        if(data.Response=== "False"){
            document.getElementById("box").innerHTML=null;
    
    let image=document.createElement("img")
    image.src="https://cdn-60c35131c1ac185aa47dd21e.closte.com//wp-content/uploads/2020/04/imovie-export-issue-1.png"
    image.width="100%"
    document.getElementById("box").append(image)
        }
    
    
    
    }