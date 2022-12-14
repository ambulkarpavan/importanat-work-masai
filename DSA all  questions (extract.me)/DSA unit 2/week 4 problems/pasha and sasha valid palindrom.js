// Pasha and Shasha are fighting over two strings, whether they are anagrams or not, help them.

// Sample Input 1 

// 2
// abcd
// dcab
// aa
// aaa
// Sample Output 1

// True
// False

function angaramOrNot(str1,str2)
{
  
    var str1=str1.split("").sort().join("")
    var str2=str2.split("").sort().join("")
     // console.log(str1,str2)
    if(str1 === str2)
    {
        console.log("True")
    }
    else{
        console.log("False")
    }
}
    
