// The factorial of a positive integer N is the product of all positive integers less than or equal to n:

// Given a number N your task is to write a program that calculates factorial of N

// Note: You must not recursion. Use iteration to solve the problem

// *Extra*: The Church-Turing thesis states that what is computable by recursive functions is computable by an iterative model (such as the Turing machine) and vice versa

// So, in this case we want you to write iterative approach to it
// Sample Input 1 

// 5
// Sample Output 1

// 120

function factIterative(N)
{
    var ans = 1
    for(var i =(N);i>=1;i--)
    {
        ans = ans*i
           
    }
 console.log(ans)
}


