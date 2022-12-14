// Given an array A with n integers, find out the length of the longest subarray which is strictly increasing i.e, every element is greater than it's the previous element in that subarray.

// Expected Time Complexity O(n^2) for each array.

// Sample Input 1 

// 2
// 2
// 1 1
// 6
// 1 2 1 2 3 1
// Sample Output 1

// 1
// 3

function subarr(N,arr)
{
   // console.log(N,arr)

   
   var max = -Infinity
    for(var i=0;i<N;i++)
    {
        var bag =[]
        for(var j=i;j<N;j++)
        {
            bag.push(arr[j])
           if(checkIncreasingOrder(bag) === true )
           {
              
               if(bag.length>max)
               {
                  //  console.log(bag)
                   max = bag.length
               }
           }
        }
    }
    
    console.log(max)
    function checkIncreasingOrder(arr)
    {
        var count=0
         for(var i=0;i<N;i++)
           {
             if(arr[i]<arr[i+1])
             {
               //console.log(arr[i],arr[i+1])
               count++
             }
           }
    
      if(count === arr.length-1)
       {
         return true
       }
      else{
     return false
        }
    }
    
}