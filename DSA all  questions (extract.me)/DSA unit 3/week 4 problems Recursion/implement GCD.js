// Implement the GCD Function using recursion. Given two integers a and b, find the greatest common divisor of a and b.

// The approach which uses logarithmic time complexity is expected here.
// Sample Input 1 

// 2
// 6 9
// 2 25
// Sample Output 1

// 3
// 1

function GCM(num1,num2)
{
 var temp =0
  function interation(num1,num2)
  {
      if(num2 == 0)
      {
          return num1
      }
    //   temp = num2
    //   num2 = num1 % num2;
    //   num1 = temp
      
      return interation(num2,num1%num2)
  }
 console.log(interation(num1,num2))
 
 
 
//   while(num2>0)
//   {
//       var temp = num2
//       num2 = num1 % num2;
//       num1 = temp
//   }
  
//   console.log(temp)
}