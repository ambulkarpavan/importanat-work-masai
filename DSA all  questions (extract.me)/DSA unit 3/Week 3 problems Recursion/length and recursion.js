// Given a string, S. Find the length of the string using recursion.

// Note: You are not allowed to use the length built-in property.
// Sample Input 1 

// masaischool
// Sample Output 1

// 11

function  length(str)
{
   //console.log(str.length)
 
   function recursion(str,i)
   {
       if(str[i] === undefined)
       {
           return i
       }
       
       return recursion(str,i=i+1)
   }
   console.log(recursion(str,0))
}