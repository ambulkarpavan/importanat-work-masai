// Andy and Mark are playing a game of arrays.
// The game involves finding the smallest neighbor element to the left side for each element in the array
// Andy counts the number of elements which do not have a smaller neighbor element to the left side. Help Andy find the count

// Sample Input 1 

// 8
// 39 27 11 4 24 32 32 1
// Sample Output 1

// 5

function runProgram(input){
    input = input.trim().split("\n")    
        var N = +input[0]
        var arr = input[1].trim().split(" ").map(Number)
        SNEmethod(N,arr)
    }
    
    function SNEmethod(N,arr)
    {
       // console.log(N,arr)
        var stk =[]
        var ans=[]
        var count=0;
        for(var i=0;i<N;i++)
        {
            while(stk.length>0 && stk[stk.length-1]>=arr[i])
            {
                stk.pop()
            }
            
            if(stk.length==0)
            {
                count++
                ans.push(-1)
            }
            else{
                ans.push(stk[stk.length-1])
            }
            stk.push(arr[i])
        }
        console.log(count)
    }