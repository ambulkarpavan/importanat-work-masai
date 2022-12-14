// Given an array of length N , sort the array into a wave-like pattern.

// An array is sorted in waveform if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >=  and so on ...

// Sample Input 1 

// 10
// 9 8 4 10 3 6 5 7 1 2
// Sample Output 1

// 2 1 4 3 6 5 8 7 10 9

function makeAWave(N,arr)
{
    arr=arr.sort(function(a,b)
    {
        return a-b
    })
   // console.log(arr)
   
   for(var i=0;i<arr.length;i=i+2)
   {
       swap(arr,i,i+1)
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