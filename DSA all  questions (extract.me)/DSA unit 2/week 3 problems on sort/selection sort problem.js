// You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted.
// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9

function solve(N,arr){
    //write code here
    
    for(var i=0;i<N-1;i++)
    {
        var min=i
        for(var j=i+1;j<N;j++)
        {
            if(arr[j]<arr[min])
            {
               min=j
            }
        }
        swap(arr,min,i)
    }
    
  
    function swap(arr,i,j)
    {
        var temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        return arr
    }
      console.log(arr.join(" "))
}