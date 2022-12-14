// You love food. Hence, you took up position of a manager at Masai restaurant that serves people with delicious food packages. It is a very famous place and people are always queuing up to have one of those packages. Each package has a cost associated with it. The packages are kept as a pile. The job of a manager is very difficult. You need to handle two types of queries:

// 1) Customer Query:

// When a customer demands a package, the food package on the top of the pile is given and the customer is charged according to the cost of the package. This reduces the height of the pile by 1.

// In case the pile is empty, the customer goes away empty-handed.

// 2) Chef Query:

// The chef prepares a food package and adds it on top of the pile. And reports the cost of the package to the Manager.

// Help him manage the process.
// Sample Input 1 

// 6
// 1
// 2 5
// 2 7
// 2 9
// 1
// 1
// Sample Output 1

// No Food
// 9
// 7

function masaiRestaurant(arr,stack)
{
 // console.log(arr,stack)
  if(arr[0]==1)
  {
      if(stack[stack.length-1]==undefined)
      {
          console.log("No Food")
      }
      else{
          console.log(stack[stack.length-1])
          stack.pop()
      }
  }
  else if(arr[0]===2)
  {
      stack.push(arr[1])
  }
 
}
 