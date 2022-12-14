// You are the merchant at a very company, and are trying to make trades with some foreign nationals

// But the foreigners are very particular with the change while making payments

// Therefore, you are trying to tackle this problem, and trying to create a program to find in how many ways can you make the change

// Declare a variable with the namedollar, such that it stores the number of ways you can make an amount equal to exactlyN, given that you have unlimited supplies of coins of1,3, and 5dollars

// Sample Input 1 

// 5
// Sample Output 1

// 5

function dollar(input)
{
    // console.log(input)
    var count=0
    function recursion(N)
    {
        if(N==0 )
        {
            
            return 1
        }
        if(N<0)
        {
            return 0
        }
        
        return recursion(N-1)+recursion(N-3)+recursion(N-5)
    }
    console.log(recursion(input))
}
