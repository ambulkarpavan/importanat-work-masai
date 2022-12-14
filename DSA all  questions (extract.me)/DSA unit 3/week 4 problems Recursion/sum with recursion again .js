// You are given an array and you have to find the sum of the absolute difference between consecutive elements of the array.

// For instance, if the array is 3,5,6,1,8

// Absolute of (3-5) = 2

// Absolute of (5-6) = 1

// Absolute of (6-1) = 5

// Absolute of (1-8) = 7

// ------------------------

// Sum of all absolute = 15

// ------------------------

// **The only constraint is that you cannot write an iterative code. You have to write a recursive code only

// Sample Input 1 

// 2
// 3
// 1 5 2
// 5
// 3 5 6 1 8
// Sample Output 1

// 7
// 15

function  sumRecursion(N,arr)
{
    //console.log(N,arr)
    var diff =0
    function findDiff(arr,i)
    {
        
        if(i === arr.length-1)
        {
            return diff
        }
     
        diff =  diff+Math.abs(arr[i]-arr[i+1])
          // console.log(diff)
        return  findDiff(arr,i=i+1)
    }
    console.log(findDiff(arr,0))

}