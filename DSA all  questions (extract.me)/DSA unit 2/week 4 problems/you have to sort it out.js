// Given an array A of non-negative integers of size m. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

// Example:

// A={4,5,3,7,1}

// After sorting the new array becomes A={1,3,4,5,7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.

// IMPORTANT: YOU CANNOT USE BUILT-IN SORT FUNCTION. YOU HAVE TO WRITE A SORTING ALGORITHM - Merge sort or Quick Sort

// Sample Input 1 

// 5
// 4 5 3 7 1
// Sample Output 1

// 4 2 0 1 3

function sortIt(N,arr)
{
    var indexArr=[]
    for(var i=0;i<N;i++)
    {
        indexArr.push(i)
    }
    
    
    for(var i=0;i<N;i++)
    {
        for(var j=0;j<N-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                 
                swap(arr,j,j+1,indexArr)
            }
        }
    }
    
    function swap(arr,i,j,indexArr)
    {
        var temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        
        var temp=indexArr[i]
        indexArr[i]=indexArr[j]
    }
}