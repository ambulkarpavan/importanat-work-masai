
let arr=[]

function Product(n,p,b){
    this.name=n;
    this.price=p;
    this.brand=b;
}

function storeproduct(e){
    e.preventDefault();
    let form=document.getElementById("products");

    let name = form.name.value;

    let price = form.price.value;

    let brand = form.brand.value;
    let p1= new Product(name,price,brand);

    arr.push(p1);
    console.log( "arr:",arr)
}