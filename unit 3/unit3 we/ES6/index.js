// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY] 

const api="AIzaSyDhbR1ENwvGWJzn5fOB7DYYREA22-HlKOE"


const searchvideos=async () => {
    try{
        const q= document.getElementById("query").value 

const res =await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${api}`
    );
const data = await res.json();
console.log(data.items)
append(data.items)


}
 
    catch(err){
        console.log(err)
    }
};

const append = (videos) => {

    let show_videos=document.getElementById("show_videos");
    
    show_videos.innerHTML=null;

    videos.forEach(({id:{videoId},snippet:{title}})=>{
 
    let div=document.createElement("div");

    let iframe=document.createElement("iframe")
   iframe.src = `https://www.youtube.com/embed/${videoId}`
   iframe.width= "100%";
   iframe.height= "70%";
   iframe.allow="fullscreen";

   let name= document.createElement("h5")
   name.innerText=title;

   div.append(iframe,name);

   let data={
       title,
       videoId
   };

   div.onclick = ()=>{
    showvideos(data)
   }


   show_videos.append(div);

});
};

 const showvideos = (x) =>{
     window.location.href="video.html";

     localStorage.setItem("video",JSON.stringify(x))
 }