// You are given two arraysAandB, each of size N.
// The first array A, is sorted in ascending order, while the second array is sorted in descending order.
// You have to find the number of elements common in both the arrays.
// Try to solve this without using any extra space.

// Sample Input 1 

// 1
// 6
// 1 2 2 3 4 5
// 4 4 3 2 1 1
// Sample Output 1

// 4

function AsceDescSorrted(N,arr1,arr2)
{
   var left=0;
   var right=N-1;
   var count=0;
   while(left<=N-1 && right>=0)
   {
       if(arr1[left]==arr2[right]) //if they are equal we will move left and right both
       {
         // console.log(arr1[left],arr2[right])
           count++;
           left++;
           right--;
       }
       else if(arr1[left]<arr2[right])  //as arr2 is in descending order in border to make value
                                        //greater we do left++
       { 
           left++   
       }
       else{
        right--
       }
   }
   console.log(count)
}