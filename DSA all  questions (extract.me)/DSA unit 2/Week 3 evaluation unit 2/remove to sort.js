// Given an array of integers of length n, the task is to remove elements from the array to make array sorted. That is, remove the elements which do not follow an increasing order.
// Sample Input 1 

// 10
// 1 2 4 3 5 7 8 6 9 10
// Sample Output 1

// 1 2 4 5 7 8 9 10

function  removetosort(N,arr)
{
    
    
    var arr1=[]
    arr1.push(arr[0])
    for(var i=1;i<N;i++)
    {
        if(arr[i]>=arr1[arr1.length-1])    //we have to check pre num is less than or eual to next no or not
        {
            arr1.push(arr[i])
        }
    }
    console.log(arr1.join(" "))
}