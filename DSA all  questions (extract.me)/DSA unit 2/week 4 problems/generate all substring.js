// You are given a string A of size N. Print all the non empty substrings of the string.

// Note: You have to print the strings in an order such that all the substrings, starting with the first character are printed first, then all the substrings starting with the second character are printed, and so on. Refer the sample I/O for better understanding.

// Note: The string contains only lowercase letters.

// Sample Input 1 

// 1
// 4 
// aman
// Sample Output 1

// a 
// am 
// ama 
// aman 
// m 
// ma 
// man 
// a 
// an 
// n

function generateALlSubstr(N,A){

    for(var i=0;i<N;i++)
    {
        var bag=""
        for(var j=i;j<N;j++)
        {
            bag=bag+A[j]
            console.log(bag)
           
        }
    }
 
}