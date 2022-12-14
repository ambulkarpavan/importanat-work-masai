// You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.

// Note: You must not use sort() function in your entire code
// Sample Input 1 

// 4
// 1 5 7 9
// 2 4 6 8
// Sample Output 1

// 1 2 4 5 6 7 8 


function runProgram(input){
    input = input.trim().split("\n")
    let N =+input[0]
    let arr1= input[1].trim().split(" ").map(Number)
    let arr2= input[2].trim().split(" ").map(Number)
    performMerging(N,arr1,arr2)
}

function     performMerging(N,arr1,arr2)
{
    let p1=0;
    let p2=0;
    let ans =[]
    while(p1<N && p2<N)
    {
        if(arr1[p1]<= arr2[p2])
        {
            ans.push(arr1[p1])
            p1++;
        }
        else if(arr1[p1]>= arr2[p2]){
            ans.push(arr2[p2])
            p2++;
        }
    }
  
    
while(p1<arr1.length)  //copying remaining elements of the arr1 or arr2 which left in the above 
                         // while loop using these 2 while loop
{
    ans.push(arr1[p1])
    p1++
}
while(p2<arr2.length)
{
    ans.push(arr2[p2])
    p2++
}

    console.log(ans.join(" "))
}





function  performMerging(N,arr1,arr2)
{
    //console.log(N,arr1,arr2)
    
   // var ans=[]
     
    // while(arr1.length && arr2.length)  ..........oneza way
    // {
    //     if(arr1[0]<arr2[0])
    //     {
    //         ans.push(arr1.shift())
    //     }
    //     else{
    //         ans.push(arr2.shift())
    //     }
    // }
    
    // console.log(...ans,...arr1,...arr2)
    
    
    var p1=0;
    var p2=0;
    var bag=[]
    while(p1<N || p2<N)
    {
        if(arr1[p1]<= arr2[p2] )
        {
            bag.push(arr1[p1])
         
            p1++
        }
        if(arr1[p1]> arr2[p2] )
        {
            bag.push(arr2[p2])
               
           
            p2++
        }
    }
    
    console.log(bag)
//     if(bag[bag.length-1] != arr1[arr1.length-1])
//     {
//         bag.push(arr1[arr1.length-1])
//          console.log(bag.join(" "))
//     }
//   else 
//     {
//         bag.push(arr2[arr2.length-1])
//          console.log(bag.join(" "))
//     }
   
}
