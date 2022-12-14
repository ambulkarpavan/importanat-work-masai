// You need to implement a list using queue data structure. You can only use queue.get() and queue.put() methods.

// Note- import and the use queue data struc

// Sample Input 1 

// 3
// Push 4
// Push 5
// Pop
// Sample Output 1

// 5

function listAndQueue(arr,que)
{
    //console.log(arr)
    if(arr[0] === "Push")
    {
        que.push(Number(arr[1]))
    }
      else{
        if(que.length == 0)
        {
            console.log("Empty")
        }
        else{
            let x = que[que.length-1]
           
            console.log(x)
            que.pop()
        }
        
    }
}