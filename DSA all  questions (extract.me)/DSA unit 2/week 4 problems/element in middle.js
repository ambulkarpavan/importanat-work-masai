// Given an unsorted array of size, N. Find the first element in the array such that all of its left elements are smaller and all right elements to it are greater than it.

// Note: Left and right side elements can be equal to the required element. And extreme elements cannot be required element.

// Sample Input 1 

// 5
// 4 3 6 7 8
// Sample Output 1

// 6


function middleElement(N,arr)
{
//using space complexity extra space
var left=[]

left[0] =arr[0]
left[N-1] = Infinity
for(var i=1;i<N;i++)
{
   if(left[i-1]<arr[i])
     { 
         left[i]=arr[i]
     }
   else
   {
      left[i] = left[i-1]
   }

} 
//console.log(left)  //left array where all lesser elements are there
var right =[]
right[N-1] = arr[N-1]
right[0] = -Infinity
for(let j=(N-1);j>=1;j--)
{
  
   
         if(right[j]>arr[j-1])
         { 
             right[j-1] = arr[j-1]
          }
          

}
//console.log(right)   //right array where all greater element are there

var bag = ""
for(let k=0;k<N;k++)
{
    if(left[k] <= arr[k]&& arr[k] <= right[k])
    {
     
        bag=bag+arr[k]
        break
    }
  
}

    if(bag.length >0)
     {
    
     console.log(bag)
     }
   else
     {
      console.log(-1)
      }
    
}