// Sample Input 1 

// 4 2
// Sample Output 1

// 13.0000

function EtopowerX(arr)
{
    //console.log(arr)
    var x = arr[0]
    var n = arr[1]
   
    
    function recursion(x,n)
    {
        if(n===0)
        {
            return 1
        }
       // console.log(x,n)
        return ((x**n)/factN(n))+recursion(x,n-1)
    }
    
    
    console.log(recursion(x,n).toFixed(4))
    
     function  factN(N)
     {
     if(N===1 ||N===0)
     {
         return 1
     }
     
     return N*factN(N-1)
     }
 }