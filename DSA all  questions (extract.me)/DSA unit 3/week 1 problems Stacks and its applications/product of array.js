// Given a array of N 32 bit integers. You need to find product of array for each i without considering ith element. where 0 <= i <= n-1 . See sample test case for better understanding.

// You are not allowed to use division operator. It is given that product will fit in 32 bit integer.
// Sample Input 1 

// 2
// 5
// 1 2 3 4 5
// 3
// 3 2 7
// Sample Output 1

// 120 60 40 30 24
// 14 21 6

function productOfArray(N,arr)
{
    var left=[]

left[0]=1
var prod=1
for(var i=1;i<arr.length;i++)
{
    prod=prod*arr[i-1]
    left[i]=prod
   // console.log(prod)
}
//console.log(left)

var right=[]
right[N-1]=1
var prod=1
for(var j=(N-2);j>=0;j--)
{
prod=prod*arr[j+1]
right[j]=prod
//console.log(prod)
}
//console.log(right)

var ans=[]
for(var k=0;k<left.length;k++)   //now the time complexity is T=O(N) ans space complexity is 2N
{ 
    ans[k]=left[k]*right[k]
}
console.log(ans.join(" "))
}