






function detail(a,b,c){
    this.color = a ;
    this.name = b ;
    this.capicity=c;
}

detail.prototype.Brand="Tata";
detail.prototype.Type= "Four-wheeler";
detail.prototype. Drive= "rear wheel";
detail.prototype.  window= "four";
    
let car1= new detail("black","indigo",5)
console.log(car1)