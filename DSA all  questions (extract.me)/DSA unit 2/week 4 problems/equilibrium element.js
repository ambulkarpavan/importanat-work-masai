// Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

// Sample Input 1 

// 5
// 3 3 5 5 1
// Sample Output 1

// 3

function equilibriumElement(N, arr){
    var left=0;
    var right=N-1;
    var bag=0
    
    var sum1=0
    var sum2=0
    while(left<right )
    {
        sum1 = sum1+arr[left]
         sum2 = sum2+arr[right]
       
        if(sum1!=sum2)
        {
            left++
            right--
        }
        
        if(sum1==sum2)
        {
            bag=(right-left)+1
        }
        
    }
    
    if(bag==0)
    {
        console.log(-1)
    }
    else{
        console.log(bag)
    }
}