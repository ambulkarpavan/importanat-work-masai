// You are playing the popular game of "Age of Empires". You are the king of the empire where you have 2N workers.

// All workers will be grouped in the association with size 2, so a total of N associations have to be formed.

// The building speed of the i-th worker is A[i].

// To make an association, you pick up 2 workers. Let the minimum building speed between both workers be x, then the association has the resultant building speed x.

// You have to print the maximum value possible of the sum of building speeds of N associations if you make the associations optimally.
// Sample Input 1 

// 2
// 1 3 1 2
// Sample Output 1

// 3
// Hint

// Sample1Explanation

// If you make an association using the first and third worker, and another using the second and fourth worker, each association will have 1 and 2 resultant building speed, which has a total of 3.

function solveAgeOfEmpire(N,arr)
{
  var arr=arr.sort(function(a,b)
  {
      return a-b
  })

var sum=0
var p1=0;
var p2=p1+1;

while(p1<p2 && p2<arr.length)
{
    sum=sum+calMin(arr[p1],arr[p2])
    p1=p1+2
    p2=p2+2
}


console.log(sum)


function calMin(a,b)
{
   if(a<b)
   {
       return a;
   }
   else{
       return b;
   }
}
}