var str=["fai","mai","sal","baig"]

    str=str.sort(function(a,b)
                     { 
                       if(a>b) return 1
                       if(a<b)  return -1
                       return 0
                     })
                   
                     console.log(str)   
                     
                     
var arr=[9,5,21,4,23,4]
 
console.log(arr.sort(function(a,b)
{
    return a-b
}))