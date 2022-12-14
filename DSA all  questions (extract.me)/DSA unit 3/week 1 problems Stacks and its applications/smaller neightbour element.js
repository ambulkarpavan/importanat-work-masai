// Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

// Mathematically,

// G[i] for an element A[i] is an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Note: Elements for which no smaller element exist, consider next smaller element as -1.

// Sample Input 1 

// 8
// 39 27 11 4 24 32 32 1
// Sample Output 1

// -1 -1 -1 -1 4 24 24 -1

function smallerNeighbourElement(N,arr)
{
    // console.log(N,arr)
    //stack DS approach
    
    
   
//type 1= smaller neighbour element to left
    var stack=[]
    var ans=[]

    for(var i=0;i<N;i++)
    {
        //console.log(stack,ans)
        while(stack.length>0 && stack[stack.length-1] >= arr[i])
        {
            stack.pop()
        }
        
          if(stack.length == 0 )
          {
            ans[i]= -1
          }
          else if(stack[stack.length-1] < arr[i])
         {
            ans[i]=stack[stack.length-1]
         }
        
    stack.push(arr[i])
    }
    console.log(ans.join(" "))

//Type-2 nearest greatest element to left

// var stack=[]
//     var ans=[]

//     for(var i=0;i<N;i++)
//     {
//         //console.log(stack,ans)
//         while(stack.length>0 && stack[stack.length-1] <= arr[i])
//         {
//             stack.pop()
//         }
        
//           if(stack.length == 0 )
//           {
//             ans[i]= -1
//           }
//           else if(stack[stack.length-1] > arr[i])
//          {
//             ans[i]=stack[stack.length-1]
//          }
        
//     stack.push(arr[i])
//     }
//     console.log(ans.join(" "))

//Type-3 nearest smaller element to right

//      var stack=[]
//     var ans=[]

//     for(var i=(N-1);i>=0;i--)
//     {
//         //console.log(stack,ans)
//         while(stack.length>0 && stack[stack.length-1] >= arr[i])
//         {
//             stack.pop()
//         }
        
//           if(stack.length == 0 )
//           {
//             ans[i]= -1
//           }
//           else if(stack[stack.length-1] < arr[i])
//          {
//             ans[i]=stack[stack.length-1]
//          }
        
//     stack.push(arr[i])
//     }
//     console.log(ans.join(" "))

//Type-4 nearest largest element to right

  // var stack=[]
  //   var ans=[]
   
  //   for(var i=(N-1);i>=0;i--)
  //   {
  //       //console.log(stack,ans)
  //       while(stack.length>0 && stack[stack.length-1] <= arr[i])
  //       {
  //           stack.pop()
  //       }
        
  //         if(stack.length == 0 )
  //         {
  //           ans[i]= -1
  //         }
  //         else if(stack[stack.length-1] > arr[i])
  //        {
  //           ans[i]=stack[stack.length-1]
  //        }
        
  //   stack.push(arr[i])
  //   }
  //   console.log(ans.join(" "))
    
  
 //brute force approach   
//     var ans=[]
    
//     for(var i=0;i<N;i++)
//     {
//         var flag=false;
        
//         for(j=i-1;j>=0;j--)
//         {
//             if(arr[j]<arr[i])
//             {
//                 ans[i]=arr[j]
//                 flag=true
//                 break;
//             }
//         }
//         if(flag==false)
//         {
//             ans.push(-1)
//         }
//     }
//   console.log(ans.join(" "))
    
    

}