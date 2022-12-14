
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.
// Sample Input 1 

// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9
// Sample Output 1

// 21


function runProgram(input){
    input=input.trim().split("\n")
    var [n,k]= input[0].trim().split(" ").map(Number)
    var arr=input[1].trim().split(" ").map(Number)
    // console.log(n,k,arr)
    maxsubarr(n,k,arr)
}
function maxsubarr(n,k,arr)  //time complexity is O(N)
 {    
    
var sum=0;
var max=-Infinity;
for(var i=0;i<k;i++)    //sliding  window technique
{
    sum=sum+arr[i]
}
if(sum>max){
    max=sum
}

for(var j=k;j<arr.length;j++)
{
    sum=sum+arr[j]
    sum=sum-arr[j-k]
    if(sum>max)
    {
        max=sum
    }
}
console.log(max)
}