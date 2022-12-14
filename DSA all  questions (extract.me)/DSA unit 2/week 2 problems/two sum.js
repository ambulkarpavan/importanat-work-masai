// Given a sorted array of integers, return indices of two numbers such that they add up to a target value.

// Sample Input 1 

// 3
// 4 9
// 2 7 11 15
// 5 10
// 1 2 3 5 5
// 2 100
// 48 49
// Sample Output 1

// 0 1
// 3 4
// -1 -

function runProgram(input){
    input=input.trim().split("\n")
    var tc= +(input[0])
    var line=1;
    
    for(var i=0;i<tc;i++)
    {
        var [N,K]= input[line].trim().split(" ").map(Number)
        line++;
        var arr= input[line].trim().split(" ").map(Number)
        line++
        // console.log(N,K,arr)
       console.log( twosum(N,K,arr))
   
    }
    
}

function twosum(N,K,arr)
 {
  
    var left=0;
     var right= arr.length-1;
     var sum=0;
     while(left<right)
     {
         
         sum=arr[left]+arr[right]
        // console.log(sum)
         if(sum==K)
         {
             return left+" "+right
         }
         else if(sum<K)
         {
             left++  //left++ becz we have sordted array in order to increse sum we have to move left to right 
         }
         else{
             right-- //becz in order to reduce sum to K we have to remove right element becz it have more value becz of sorted array
         }
     }
     return -1+" "+-1;
    }