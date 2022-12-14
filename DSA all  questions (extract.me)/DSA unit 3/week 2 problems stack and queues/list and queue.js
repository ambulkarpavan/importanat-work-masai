// You need to implement a queue data structure with a list using plain list methods. You can only use list.append() and list.pop() methods in this question.


// Sample Input 1 

// 4
// E 2
// E 3
// D
// D
// Sample Output 1

// 2
// 3

function  listAndQueue(arr,que)
{
   // console.log(arr,que)
    
    if(arr[0]== "E")
    {
        que.push(Number(arr[1]))
    }
    else
    {
        if(que.length === 0)
        {
            console.log("Empty")
        }
        else
        {
            console.log(que[0])
            que.shift()
        }
    }
}