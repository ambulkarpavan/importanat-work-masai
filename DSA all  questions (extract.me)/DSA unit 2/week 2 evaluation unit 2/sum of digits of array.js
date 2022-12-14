var arr=[100224,40223,51,62,78,56,] //here number can have any value
var bag=0;
var arr1=[]
for(var i=0;i<arr.length;i++)
  {
    var y=arr[i]
    while(y>0){
    var x=y%10
     y=Math.floor(y/10)
      bag=bag+x
      
  }
  arr1.push(bag)
    bag=0
  }
console.log(arr1)

//or
// var bag=0
// var result=""
// for(var i=0;i<N;i++)
// {var sack=0
//     bag=arr[i].toString()
//     for(var j=0;j<bag.length;j++)
//     {
//         sack=sack+(Number(bag[j]))
//     }
//     result=result+sack+" "
// }
// console.log(result)