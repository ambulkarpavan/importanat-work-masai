// You are provided with N names, your task is to write a code that prints the name along with the number of times it is presently separated by space. (See sample test case for better understanding)
// Sample Input 1 

// 3
// masai
// school
// masai
// Sample Output 1

// masai 2
// school 1

function countwords(arr)
{
  var names=arr.sort()
  var obj={}
 for(var i=0;i<names.length;i++)
 {
     if(obj[arr[i]]==undefined)
     {
         obj[arr[i]]=1
     }
     else{
         obj[arr[i]]=obj[arr[i]]+1
     }
 }
 for(var key in obj)
 {
     console.log(key+" "+obj[key])
 }
}