// Find the number of ways that a given integer, X, can be expressed as the sum of the Nth powers of unique, natural numbers.

// Sample Input 1 

// 10 2
// Sample Output 1

// 1
// Hint

// The answer will (1^2 + 3^2)

function runProgram(input){
    input = input.trim()
    var [X,N] = input.trim().split(" ").map(Number)
   console.log(powerSum(X,N,1,0)) 
    
}

function powerSum(X,N,curr,sum)
{
    let ans = 0;
    let p = mainPower(curr,N)
    
    while(p+sum<X)
    {
        ans = ans + powerSum(X,N,curr+1,sum+p)
        curr++
        p = mainPower(curr,N)
    }
    if(p+sum === X)
    {
        ans++
    }
    return ans
    
    function mainPower(num,N)
    {
        if(N==0)
        {
            return 1
        }
        else if(N%2==0)
        {
            return mainPower(num,parseInt(N/2))*mainPower(num,parseInt(N/2))
        }
        else{
            return num*mainPower(num,parseInt(N/2))*mainPower(num,parseInt(N/2))
        }
    }
}