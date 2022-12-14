// This is an easy question. You just have to find the sum of an array given the elements of the array.

// The only constraint is that you have to write a recursive code
// Sample Input 1 

// 3
// 5
// 6 3 8 2 -4
// 5
// -10 -7 10 2 -2
// 5
// -4 -5 6 -3 9
// Sample Output 1

// 15
// -7
// 3

function sumRecursion(N,arr)
{
    var sum =0
    function findSum(arr,i)
    {
        if(i === arr.length)
        {
            return sum
        }
        sum = sum + arr[i]
        return  findSum(arr,i=i+1)
    }
    console.log(findSum(arr,0))
}