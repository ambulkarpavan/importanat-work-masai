// Given two integers a and b, we need to find the value of a^b recursively.

// Expected Time Complexity - O(logb).

// Sample Input 1 

// 2 4
// Sample Output 1

// 16

function  powerFunction(a,b)
{
    
 var K=1
    function recursion(a,b)  //time complexity is T=O(b)
    { 
    
        if(b==0)
        {
            return 1
        }
       
   
        return a*recursion(a,b-1)
    }
    console.log(recursion(a,b))

//time complexity T=O(lob(b)  ... less than above one
// function recursion(a,b)
// {
//     if(b ===0)
//     {
//         return 1
//     }
//     if(b === 1)
//     {
//         return a
//     }
//     if(b % 2 ==0)
//     {
//         return recursion(a,b/2)*recursion(a,b/2)
//     }
//     else{
//          return a*recursion(a,(b-1)/2)*recursion(a,(b-1)/2);
//     }
// }
// console.log(recursion(a,b))
}
 