// There is a stack of integers which is currently empty. You are given an integer n and there are n operations that you need to perform on the stack.

// The next n line contains one of the following 3 operations:

// 1 x : Push x to the top of the stack.

// 2 : Pop an element from the top of the stack. If the stack is empty, do nothing.

// 3 : Print the top element of the stack (if stack is empty, print "Empty!" (without quotes)).

// Sample Input 1 

// 6
// 1 15
// 1 20
// 2
// 3
// 2
// 3
// Sample Output 1

// 15
// Empty!

function pushPopTop(arr,stack) 
{
    
  // console.log(arr,stack)
    if(arr[0]==1)
    {
        stack.push(arr[1])
    }
    else if(arr[0]==2)
    {
        stack.pop()
    }
    else if(arr[0]==3)
    {
        if(stack[stack.length-1]===undefined)
        {
            console.log("Empty!")
        }
        else{
            console.log(stack[stack.length-1])
        }
        
    }

}