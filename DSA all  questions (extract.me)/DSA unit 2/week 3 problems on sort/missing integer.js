// You are given an array of N-1 integers and integers are in the range of 1 to N. There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer
// Sample Input 1 

// 4 5 1 3
// Sample Output 1

// 2

function missingNum(arr)
{
    var arr= arr.sort(function(a,b)
    {
        return a-b
    })
    //console.log(arr)
    
    var left=0;
    var right=left+1;
    
    while(left<arr.length && right<arr.length)
    {
        if(arr[left]<arr[right] && arr[right]-arr[left]==1 )
        {
            left++
            right++
        }
        else if(arr[left]<arr[right] && arr[right]-arr[left] !==1)
        {
            console.log(arr[left]+1);
            break
        }
    }
}