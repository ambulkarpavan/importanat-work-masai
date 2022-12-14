// Given an array of N integers, print the 3 distinct maximum and 3 distinct minimum elements of the array.
// Sample Input 1 

// 8
// 1 2 3 4 2 1 6 5
// Sample Output 1

// 1 2 3
// 4 5 6

function threeMaxThreeMin(N,arr){
    //write code here

   var max=-Infinity
    for(var i=0;i<N;i++)
    {
        var max1=checkmax(arr,max)
        var max2=checkmax(arr,max)
       var max3= checkmax(arr,max)
    }
    function checkmax(arr,max)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i]>max && max1!==arr[i] && max2!==arr[i])
            {
                max=arr[i]
            }
        }
        return max
    }
    
    
    var num=Infinity
    for(var i=0;i<N;i++)
    {
        var min1=checkmin(arr,num)
          var min2=checkmin(arr,num)
       var min3=checkmin(arr,num)
       
    }
    
function checkmin(arr,min)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]<min && min1!=arr[i] && min2!=arr[i])
        {
            min=arr[i]
        }
    }
    return min
  
}

var arrmin=[]
arrmin.push(min1,min2,min3)
arrmin.sort(function(a,b)
{
   return a-b
})
var arrmax=[]
arrmax.push(max1,max2,max3)
arrmax.sort(function(a,b)
{
    return a-b
})

if(min2==Infinity||min1==Infinity||min3==Infinity)
{
    console.log("Not Possible")
    console.log("Not Possible")
}
else{
console.log(arrmin.join(" "))
    console.log(arrmax.join(" "))
}    
}