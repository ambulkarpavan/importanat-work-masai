// You are given two arraysAandB, both of the same sizeN

// You have to find the sum of all elements in both the arrayAandB
// Sample Input 1 

// 1
// 5
// 1 2 3 4 5
// 6 7 8 9 10 
// Sample Output 1

// 55

function twoArrayOneSum (a1,a2,n){
        
    var sum=0;
    for(var i=0;i<n;i++)
    {
        sum=sum+a1[i]
    }
     for(var i=0;i<n;i++)
    {
        sum=sum+a2[i]
    }
    console.log(sum)
} 
