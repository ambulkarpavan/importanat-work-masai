// New Year Celebration is coming near and DG is hosting a party for it, To make sure the party goes well she wants order in the party.There are two counters one of ice-cream and other for Cold-drinks.

// On ice-cream counter the line was formed in form of Queue and on drinks counter the line was formed in order of Stacks.

// She gave the management of the party to NV, NV made a plan to ask the manager following types of query.

// Query types:

// 1 X : Number X enter the Queue.

// 2 X : Number X enter the Stack.

// 3: Output whoever is in-front of the queue.

// 4: Output whoever is on-top of the stack

// 5: Which person is in-front of queue get out of queue and enters the stack.

// Note: If the Queue or Stack is empty then output "-1"
// Sample Input 1 

// 7
// 1 4
// 2 3
// 1 2
// 3
// 4
// 5
// 4
// Sample Output 1

// 4
// 3
// 4

function  newYear(arr,stack,que,front,rear)
{
     //console.log(front,rear)
    
   
    
    if(arr[0]==1)
    {
       que.push(arr[1])
    }
   // console.log("que",que)
    if(arr[0] == 2)
    {
        stack.push(arr[1])
    }
   // console.log("stack",stack)
    if(arr[0]==3)
    {
        if(que.length>0)
        {
            console.log(que[0])
        }
        else{
              console.log(-1)
        }
        
       
    }
    //console.log("que",que[0])
    if(arr[0]==4)
    {
        if(stack.length>0)
        {
              console.log(stack[stack.length-1])
        }
           else{
              console.log(-1)
        }
      
    }
    if(arr[0]==5)
    {
        stack.push(que[0])
        que.shift()
    }
 
}