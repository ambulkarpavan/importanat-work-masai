
//slideshow start

// document.querySelector ("#btn1").addEventListener("click",add);
// document.querySelector ("#btn2").addEventListener("click",stop);


let moviearr=[
    "https://media.gqindia.com/wp-content/uploads/2020/02/historical-Bollywood-movies-Tanhaji-netflix-amazon-prime-hotstar-mx-player.jpg",
    "https://www.iwmbuzz.com/wp-content/uploads/2019/12/the-trend-of-historical-movies-in-bollywood.jpg",
    "https://theindianwire.com/wp-content/uploads/2017/12/maxresdefault-2-2.jpg"
]

// let a;
 let i=0;

// function add(){

        let image= document.createElement("img");

    //    a= 
    setInterval(function(){

            if(i==moviearr.length){
                i=0;
            }
            document.querySelector("#slideshow").innerHTML=null;
            image.src=moviearr[i];
            image.id="img"

            document.querySelector("#slideshow").append(image);
            i++ ;
        }, 2000)
   
// }

// function stop(){
//     clearInterval(a);
// }



//slideshow end

// moviedetails start


moviedetails=[
    {
        name:"Jodha Akbar",
        release_date:"10 Jan",
        poster:"https://qph.cf2.quoracdn.net/main-qimg-5b3e0dc27ecd67adda79135ffd4d19c0-lq",
        IMDb_rating:"8"
    },
    {
        name:"Prithviraj",
        release_date:"15 march",
        poster:"https://stat1.bollywoodhungama.in/wp-content/uploads/2022/02/Prithviraj-4-306x393.jpeg",
        IMDb_rating:"9"
    },
    {
        name:"Panipat",
        release_date:"7 Feb",
        poster:"https://timesofindia.indiatimes.com/thumb.cms?msid=72375755&width=137&height=195",
        IMDb_rating:"7"
    },
    {
        name:"Bajirao Mastani",
        release_date:"11 April",
        poster:"https://www.iwmbuzz.com/wp-content/uploads/2019/12/the-trend-of-historical-movies-in-bollywood-2-768x1024.jpg",
        IMDb_rating:"9"
    },
    {
        name:"Tanaji",
        release_date:"15 Jan",
        poster:"https://pbs.twimg.com/media/EHY2eXIUUAA4f23.jpg:large",
        IMDb_rating:"8"
    },
    {
        name:"Satymev jayte",
        release_date:"25 May",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyGJalPB8eySQgOh9bhsXECYa8xEBIgzIlo_FDF9y0SiO4sjrc97yDyNjMIn278mM3wc&usqp=CAU",
        IMDb_rating:"6"
    },
    {
        name:"Joker",
        release_date:"26 Jan",
        poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/joker-et00008897-24-03-2017-18-55-36.jpg",
        IMDb_rating:"5"
    },
    {
        name:"Kabir Singh",
        release_date:"3 Feb",
        poster:"https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg",
        IMDb_rating:"7"
    },
    {
        name:"Laxmi",
        release_date:"6 June",
        poster:"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_380,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201113135611-laxmii-bollywood-poster.jpg",
        IMDb_rating:"6"
    },
];

localStorage.setItem("movies",JSON.stringify(moviedetails))




let moviedata=JSON.parse(localStorage.getItem("movies"))
console.log(moviedata);

function displaydata( moviedata){
    document.querySelector("#movies").innerHTML=null;
    moviedata.map(function(ele){

        let box = document.createElement("div");
             box.id="posterbox"
        
        let name = document.createElement("h4");
        name.innerText = "Movie_Name"+"-"+ele.name;
        let poster = document.createElement("img"); 
        poster.src = ele.poster;
        poster.id="poster"
        let release = document.createElement("p");
        release.innerText = "Release_date"+": "+ ele.release_date;
        let rating = document.createElement("p");
        rating.innerText = "Rating"+"-"+ele.IMDb_rating;
      
        
        box.append(poster,name,release,rating);
        document.querySelector("#movies").append(box);
    })
}

//sort start

window.addEventListener("load",function(){
    displaydata( moviedata);
})

function sortlth(){
    
    
        moviedata.sort(function(a,b){
            return a.IMDb_rating-b.IMDb_rating
        });
        displaydata(moviedata);
    }

    function sorthtl(){
   
        moviedata.sort(function(a,b){
            return b.IMDb_rating-a.IMDb_rating
        });
        displaydata(moviedata);
    }
