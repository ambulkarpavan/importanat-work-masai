// You are given an arrayAcontaining N integers, find the running sum of the array.

// The running sum of the array is defined as the sum of all the elements of the array that exists before the current element, including the current element

// Refer the sample I/O for better understanding

// Sample Input 1 

// 1
// 5
// 1 2 3 4 5
// Sample Output 1

// 1 3 6 10 15 

function runningSum(n,arr){
    //write your code here
    
    var bag=0;
    var arr1=[]
    for(var i=0;i<n;i++)
    {
        bag=bag+arr[i]
        arr1.push(bag)
       
    }
    
    
    console.log(arr1.join(" "))

}