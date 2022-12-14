

let getdata= async (url) =>{
    let res =await fetch(url);
    let data= await res.json();
let newdata=data.meals;

    return newdata;
}

let append = (newdata,container) =>{
    console.log(newdata)
    newdata.forEach( ({strMeal,strMealThumb}) => {
        let p=document.createElement("p");
        p.innerText=strMeal;

        let img=document.createElement("img")
        img.src= strMealThumb;

        container.append(img,p);

    })

}
export {getdata, append} ;