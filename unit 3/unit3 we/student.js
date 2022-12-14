

// const student={
//     batch:"web_17",
//     sub:"advance js",
// }

// const pavan = object.create(student)
// console.log(pavan)


// function flipcart(a){
//     this.discount=a
// }

// let p1= new flipcart("got 30% discount")
// console.log(p1)



let a1=new Array("x","y","z");
console.log(a1)

function myArray(){
        Object.defineProperty(this, "length", {
        value: 0,
        writable: true,
        enumerable: false, //dont count this property
      });

    this.length= arguments.length;


    for(let i=0;i<this.length;i++){
        this[i]= arguments[i];
    }
}

let  a2=new myArray("x","y","z") ;

myArray.prototype.टाका  = function(value){
    let index=this.length;
    this[index]=value;
    this.length++;
};

myArray.prototype.काढा   = function(value){
    let index=this.length-1;
    delete this[index]
    this.length--;
};

myArray.prototype.वरचा   = function(value){
    let index=this.length-1;
    this[index]=value;
   
};



a2.टाका ("a")
a2.काढा ()
a2.वरचा()


console.log  ( "a2:", Object.values(a2))                       