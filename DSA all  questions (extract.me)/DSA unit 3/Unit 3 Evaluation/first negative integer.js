// Given an array A containing N space-separated integers. Find the first negative integer for each and every window(contiguous subarray) of sizeK.

// Sample Input 1 

// 2
// 5 2
// -8 2 3 -6 10
// 8 3
// 12 -1 -7 8 -15 30 16 28
// Sample Output 1

// -8 0 -6 -6
// -1 -1 -7 -15 -15 0 

function runProgram(input){
    input = input.trim().split("\n")
    var tc = +input[0]
    var line =1
    for(var i=0;i<tc;i++)
    {
        var [N,K] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
        negativeInt(N,K,arr)
    }
    
}

function  negativeInt(N,K,arr)
{
   // console.log(N,K,arr)
   var bag=""
   var flag = false
   for(var i=0;i<N-K+1;i++)
   {
       flag = false
       for(var j=0;j<K;j++)
       {
           if(arr[i+j]<0)
           {
               bag=bag+arr[i+j]+" "
             
               flag = true;
               break;
           }
       }
       
       if(flag === false)

      {
          bag=bag+"0"+" "
          
      }
   }
   console.log(bag)
}