function navbar(){
   
    return `
    <div id="search_bar">
    <input type="text" id="query">
       </div>
   
       <div id="categories">
           <h3 id="nature">Nature</h3>
           <h3 id ="cars">Cars</h3>
           <h3 id="music">Music</h3>
           <h3 id="cartoon">Cartoons</h3>
           <h3 id="technology">Technology</h3>
           <h3 id="marvel">Marvel</h3>
       </div>
    ` 
    }
    
    export { navbar};