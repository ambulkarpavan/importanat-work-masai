// Given an integer n, you need to find out its binary representation using recursion.

// Here multiple test cases exist and the expected time complexity is - O(t*logn) where is t is the number of test cases.

// Sample Input 1 

// 2
// 15
// 128
// Sample Output 1

// 1111
// 10000000

function binaryEquivalent(N)
{
    //console.log(N)
    
    function recurssion(N)
    {
      
        if(N==1)
        {
            return 1
        }
        
      return (N%2).toString()+recurssion(Math.floor(N/2)) //coverted to string becz it will do addition otherwise that we dont want
        
    }
    
    console.log(recurssion(N).split("").reverse().join(""))
    
    // var ans =[]
    // while(N)
    // {
    //     ans.push(N%2)
    //     N = Math.floor(N/2)
    // }
    // console.log(ans.reverse().join(""))
}