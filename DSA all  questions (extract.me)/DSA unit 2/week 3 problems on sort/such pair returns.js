// For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).
// Sample Input 1 

// 1
// 5 2
// 3 4 0 2 7
// Sample Output 1

// 1

function suchpairReturn(N,K,arr)
 {   var arr=arr.sort(function(a,b)
{
    return a-b;
})
//console.log(arr)
     var left=0;
     var right= arr.length-1;
     var sum=0;
     while(left<right)
     {
         
         sum=arr[left]+arr[right]
        // console.log(sum)
         if(sum==K)
         {
             return 1
         }
         else if(sum<K)
         {
             left++  //left++ becz we have sordted array in order to increse sum we have to move left to right 
         }
         else{
             right-- //becz in order to reduce sum to K we have to remove right element becz it have more value becz of sorted array
         }
     }
     return -1
}