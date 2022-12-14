// You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.

// Sample Input 1 

// 5
//
// Sample Output 1

// 0 3 5 8 9
var arr=[ 3, 5, 0, 9, 8]
var N =5
function solve(N,arr){
   
    
    for(var i=0;i<N;i++)
    {
        for(var j=0;j<N-1-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                swap(arr,j,j+1)
            }
         //   console.log(arr)
        }
    }
    console.log(arr.join(" "))
    
    function swap(arr,i,j)
    {
        var temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
}
solve(N,arr)