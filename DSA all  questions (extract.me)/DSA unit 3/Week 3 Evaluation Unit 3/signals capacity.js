// There are many signal towers present in Bangalore.Towers are aligned in a straight horizontal line(from left to right) and each tower transmits a signal in the right to left direction.

// Tower X shall block the signal of Tower Y if Tower X is present to the left of Tower Y and Tower X is taller than Tower Y. So,the power of a signal of a given tower can be defined as :

// {(the number of contiguous towers just to the left of the given tower whose height is less than or equal to the height of the given tower) + 1}.

// You need to write a program that finds the power of each tower.
// Sample Input 1 

// 2
// 7
// 100 80 60 70 60 75 85
// 5
// 3 5 0 9 8
// Sample Output 1

// 1 1 1 2 1 4 6
// 1 2 1 4 1

function signalCapacity(N,arr)
{
   // console.log(N,arr)
 
  var stk =[]
  var stkIndex = []
  var ans =[]
  for(var i=0;i<N;i++)
  {
      
      while(stk.length>0 && stk[stk.length-1] <= arr[i])
      {
          stk.pop()
          stkIndex.pop()
      }
      
      if(stk.length===0)
      {
          ans.push(i+1)
      }
      else{
          ans.push(i-stkIndex[stkIndex.length-1])
      }
      
      stk.push(arr[i])
      stkIndex.push(i)
  }
  console.log(ans.join(" "))
}