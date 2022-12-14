
// You are provided an array A which has N elements. Your task is to find the count of such occurrence where the element is larger than its neighbour.

// Sample Input 1 

// 8
// 1 2 3 4 2 1 6 5
// Sample Output 1

// 2

function completewithNeighbour(N,arr)
{
    var count=0

    for(var i=0;i<N;i++)
    {
        if(arr[i]<arr[i+1] && arr[i+1]>arr[i+2])
        {
            count++
        }
    
    }
        if(arr[0]>arr[1])
        {
            count++
        }
        if(arr[N-1]>arr[N-2])
        {
            count++
        }
    console.log(count)
}