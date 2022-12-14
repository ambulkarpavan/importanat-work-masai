// Given an array A with N positive integers. Count the number of subarrays that start with an even number and end with an odd number.

// Sample Input 1 

// 1
// 5
// 1 2 3 4 5
// Sample Output 1

// 3

function  subArr(N,arr)
{
 var count=0
for(var i=0;i<N;i++)
    {
       arr1=[]
        for(var j=i;j<N;j++)
        {
           arr1.push(arr[j])
          // console.log(arr1)
           if(arr1[0]%2==0 && arr1[arr1.length-1]%2==1)
           {
             count++
           }
          
        }
    }
console.log(count)
}