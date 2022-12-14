// You have given an array of size N and an integer M.

// Your task is to calculate the difference between maximum sum and minimum sum of N-M elements of the given array.

// Sample Input 1 

// 1
// 5 1
// 1 2 3 4 5
// Sample Output 1

// 4

function minMaxSum(N,M,arr)
{
   // console.log(N,M,arr)
   arr=arr.sort(function(a,b)
   {
       return a-b
   })
   var limit=N-M
   var minSum=0
   for(var i=0;i<limit;i++)
   {
       minSum=minSum+arr[i]
   }
  // console.log(minSum)
   
   var count=0
   var maxSum=0
   for(var j=N-1;j>=0 && count<limit ;j--) //becz count from reverse is also N-M
   {
       maxSum=maxSum+arr[j]
       count++
   }
   
   
    console.log(maxSum-minSum)
}