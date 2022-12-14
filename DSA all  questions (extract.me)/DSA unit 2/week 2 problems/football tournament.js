// Masai School had hosted a Football tournament. You got hold of a profound description of the final match's process. On the whole, there are n lines in that description each of which described one goal. Every goal was marked with the name of the team that had scored it. Write a program to find the name of the team that won the finals. It is guaranteed that the match did not end in a tie.

// Sample Input 1 

// 5
// A
// ABA
// ABA
// A
// A
// Sample Output 1

// A


function runProgram(input){
    var input=input.trim().split("\n")
    //console.log(input)
    var N=Number(input[0])
    var arr=[];
    for(var i=1;i<input.length;i++)
    {
        arr.push(input[i])
    }
    
    football(N,arr)
}
function football(N,arr)
{
   var obj={}
   for(var i=0;i<N;i++)
   {
       if(obj[arr[i]]==undefined){
           obj[arr[i]]=1;
       }
       else{
           obj[arr[i]]=obj[arr[i]]+1
       }
   }
   //console.log(obj)
   var max=-Infinity;
   var result=""
   for(var key in obj)
   {
       if(obj[key]>max)
       {
           max=obj[key]
           result=key;
       }
   }
   console.log(result)
}