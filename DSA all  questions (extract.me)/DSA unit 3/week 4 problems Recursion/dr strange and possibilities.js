// Dr. Strange has n distinct integers from 1 to n. He uses his mind power and time stone to calculate all the possible subsets using the given n integers. Generate all the possible subsets.
// Sample Input 1 

// 3
// Sample Output 1


// 1 
// 1 2 
// 1 2 3 
// 1 3 
// 2 
// 2 3 
// 3 

function runProgram(input){
    input = +input.trim()
    strange(input)
    
}

function   strange(N)
{
   // console.log(N)
   let arr=[]
   for(var i=1;i<=N;i++)
   {
       arr.push(i)
   }
   //console.log(str)
  let ans =[]
   function backtracking(ans,arr,ind)
   {
    
       
         console.log( ans.join(" ")) //here we are printing spaces also
      
       if(ind >= arr.length)
       {
           return
       }
       
       for(let j = ind; j<arr.length;j++)
       {
          // ans += str[i]
       
           ans.push(arr[j])
           
           backtracking(ans,arr,j+1)
           
         //  ans= ans.split("").map(Number)
           ans.pop()
          // ans= ans.join(" ")
         
       }
   }
    backtracking(ans,arr,0)
}