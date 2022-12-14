// Given a collection of numbers, return all possible permutations.

// NOTE:

// No two entries in the permutation sequence should be the same.

// For the purpose of this problem, assume that all the numbers in the collection are unique.

// USING BUILT-IN LIBRARY FUNCTION TO PERMUTE WILL LEAD TO DISQUALIFICATION

// Sample Input 1 

// 3
// 1 2 3
// Sample Output 1

// 1 2 3 
// 1 3 2 
// 2 1 3 
// 2 3 1 
// 3 1 2 
// 3 2 1

function runProgram(input){
    input = input.trim().split("\n")
    
    var N = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    //GeneratePermutations(arr).join("\n")
     GeneratePermutations(arr)
}

function GeneratePermutations(arr)
{
 
        let ans =[]

    function permutation(arr,curr)
    {
     
        if(curr === arr.length)
        {
            ans.push([...arr])
           return
        }
    
 
        for(let i=curr;i<arr.length;i++)
        {
         
            swap(arr,i,curr)
            
            permutation(arr,curr+1)
  
            swap(arr,i,curr)
       
        }
          function swap(arr,i,j)
        {
            let temp = arr[i]
            arr[i]=arr[j]
            arr[j]=temp
           
            return arr
        } 
    
    }
          

  permutation(arr,0)
  ans.sort()
  for(let ele of ans)
  {
      console.log(ele.join(" "))
  }
    
    // if(arr.length ===1)
    // {
    //     return arr
    // }
    // let ans = arr.map((d,i) =>
    
    //      GeneratePermutations([...arr.slice(0,i),...arr.slice(i+1)])
    //      .map(V =>
    //      [d,V].join(" "))).flat()
    
    // return ans
    

    

}
 