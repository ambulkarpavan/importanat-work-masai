// You are given an array A of N integers, and an integer K. Find the maximum value of S, such S that S = a[i] + a[j], and S < K. If no such value exists, then print -1.

// Refer the sample test case for better understanding.
// Sample Input 1 

// 2
// 5
// 1 2 3 4 5
// 7
// 3
// 30 10 20
// 15
// Sample Output 1

// 6
// -1

function pairlessThank(n,arr,k)
{
    var max=-Infinity
    for(var i=0;i<n;i++)
    {
        for(var j=0;j<n;j++)
        {
            if((arr[i]+arr[j])>max && i!=j && (arr[i]+arr[j])<k)
            {
                max=arr[i]+arr[j]
            }
            
        }
       
    }
     if(max==-Infinity)
     {
         console.log(-1)
     }
     else{
         console.log(max)
     }
}