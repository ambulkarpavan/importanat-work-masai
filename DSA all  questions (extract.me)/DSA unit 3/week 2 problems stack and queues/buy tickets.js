// There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.

// There are N operations that can be performed on this line. The operations are of following type:

// E x : Integer x enters the queue (For such operation, print the new length of the queue.)

// D: The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.)

// Sample Input 1 

// 5
// E 2
// D
// D
// E 3
// D
// Sample Output 1

// 1
// 2 0
// -1 0
// 1
// 3 0

function buyTicket(arr,que)
{
   // console.log(arr)
    // var que=[]
    var front = 0;
    var rear=0;
    if(arr[0]=="E")
    {
        que.push(arr[1])
        console.log(que.length)
    }
   
    if(arr[0]=="D")
    {
       // console.log("que",que.length)
        if(que.length>0)
        {
           // console.log("a")
           var x= que[0]
           que.shift()
            console.log(x,que.length)
            x=0
        }
        else{
            console.log(-1,0)
        }
    }
}