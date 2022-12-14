// Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.

// Sample Input 1 

// 4
// Sample Output 1

// 7

function  steps(N)
{
   
    function noOfSteps(N)
    {
         if(N === 0)
         {
             return 1
         }
        if(N<0)
         {
            return 0
         }
       
             return noOfSteps(N-3)+noOfSteps(N-2)+noOfSteps(N-1)
         
    }
  console.log(noOfSteps(N))
}