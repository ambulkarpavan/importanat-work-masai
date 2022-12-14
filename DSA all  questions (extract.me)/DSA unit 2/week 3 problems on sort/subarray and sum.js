// Given an array of integers of length n and a positive integer K, the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.
// Sample Input 1 

// 4 3
// 2 3 4 6
// Sample Output 1

// 1

//using Brute method i solved  all tc not accepted but approach is right


function subarrAndsum(n,k,arr)
{  

    // var sum =arr.reduce(function(res,ele)
    // {
    //     return res+ele
    // },0)
    // console.log(sum)
    
    // var p1=0;
    
    
    
    
    
    
    
     
    var max = -Infinity
    var count=0
     for(var i=0;i<n;i++)
     {
          var arr1 = []
          
          for(var j=i;j<n;j++)
          {
           
              arr1.push(arr[j])
                                      //console.log(arr1)
                 var sum=0
              sum=sum+arr1.reduce(function(res,ele)
              {
                  return res+ele
              },0)
            //  console.log(sum)
              if(sum % k !== 0 && arr1.length >= max)
              {
                  max = arr1.length
                  //console.log(arr1)
              
              }
          }
     }
     //console.log(max,bag)
     for(var i=0;i<n;i++)
     {
          var arr1 = []
          
          for(var j=i;j<n;j++)
          {
           
              arr1.push(arr[j])
                  var sum=0
              sum=sum+arr1.reduce(function(res,ele)
              {
                  return res+ele
              },0)
              
              if(arr1.length === max && sum % k !== 0  )
              {
                 count++
              
              }
          }
     }
    
     console.log(count)
    
       
}
     