// You are given an array of n elements and an integer k, you need to rotate the array by k units.
// Sample Input 1 

// 3
// 2 1
// 1 2
// 2 2
// 1 2
// 3 1
// 1 2 3
// Sample Output 1

// 2 1
// 1 2
// 3 1 2

function rotatearray(N,k,arr)
 {
     var k=k%N;       //becz pattern is repeating after N
     function swap(arr,i,j)
     {
        
         var temp=arr[i];
         arr[i]=arr[j];
         arr[j]=temp;
         return arr
          
     }
     
     //console.log(swap(arr))
    
    function reversearray(arr,left,right)
    {
        while(left<right)
        {
            swap(arr,left,right);
            left++;
            right--;
            
        }
        return arr
    }
   
     var x=reversearray(arr,0,N-1)  //first reverse whole array
     var y=reversearray(x,0,k-1)    // reverse from 0 to k-1
      var z=reversearray(x,k,N-1)      //rverse from k to N-1
      console.log(z.join(" "))
     
     
//   var arr1=[]
   
//   for(var i=N-1;i>=0;i--)
//   {
//       arr1.push(arr[i])
//   }
//     //console.log(arr1)

// var arr2=[]
// for(var j=k-1;j>=0;j--)
// {
//     arr2.push(arr1[j])
// }
// //console.log(arr2)


// for(var s=N-1;s>=k;s--)
// {
//     arr2.push(arr1[s])
// }
// //console.log(arr3)

// console.log(arr2.join(" "))

}

