// Given an integer N, you have to find the natural logarithmic value of the given integer's factorial i.e., ln(n!).

// You have to print the result up to 4 digits after the decimal point.

// Note:- You should not be supposed to do like " finding n! and apply direct inbuilt log on top that ". Instead of that, you can use Math.log() if applicable.Also, you can't use any direct formula or perform the task iteratively - Try achieving the output recursively.
// Sample Input 1 

// 3
// Sample Output 1

// 1.7918`
// Hint

// ln(x ∙ y) = ln(x) + ln(y)

function  beyoundFact(N)
{

    
    function factorial(N)
    {
        if(N===0 || N===1)
        {
            return 1
        }
        
        return N*factorial(N-1)
    }
    var x = factorial(N)
   x = Math.log(x)
    console.log( x.toFixed(4))
}