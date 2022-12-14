// Description

// In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is

// F (0) = 0 , F (1) = 1

// and

// F (n) = F (n − 1) + F (n − 2) ,

// for n > 1.

// Your task is to write a program that calculates n-th fibonacci numbers when you are provided with n
// Sample Input 1 

// 4
// Sample Output 1

// 3

function fiboSeries(N)
{
    
        if(N ===0 || N ===1)
    {
        return N;
    }
 
    return fiboSeries(N-1)+fiboSeries(N-2)
 
}


//using iteration
// var first =0;
// var sec=1;
// var sum=0
// for(var i=2;i<=N;i++)
// {
//     sum= first + sec;
//     first = sec
//     sec = sum
     
// }
// console.log(sum)