// Hassan has discovered his own sorting algorithm. The algorithm has following conditions:

// 1. Given an integer k,  sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.

// 2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.

// Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.
// Sample Input 1 

// 5 6
// 12 18 17 65 46
// Sample Output 1

// 12 18 46 17 65
// Hint

// 12%6=0

// 18%6=0

// 17%6=5

// 65%6=5

// 46%6=4

// So, the sorted order is: 12 18 46 17 65

// 12 and 18 have same result on modulo , so, 12 remains first in sorted array as it is first in given array


function runProgram(input){
    input=input.trim().split("\n")
    var [N,K]=input[0].trim().split(" ").map(Number)
    var arr=input[1].trim().split(" ").map(Number)
    hasanalgo(arr,N,K)
 }
 function hasanalgo(arr,N,K)
 {
     
     
    for(var i=0;i<N;i++)
    {
      for(var j=0;j<N;j++)
      {
        if(arr[j]%K >  arr[j+1]%K  )
        {
            //console.log(arr[j]%K , arr[i]%K)
        swap(arr,j,j+1)
            
        }
   
      }
        
    }
    console.log(arr.join(" "))
    function swap(arr,i,j)
    {    //console.log(arr,i,j)
        var temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        return arr
    }
 }