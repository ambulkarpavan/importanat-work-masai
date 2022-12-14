// You are given two strings S1 and S2 of equal number of characters. Your task is to comment if any permutation of one string can form other or not.

// If it is possible, print "Yes" (without quotes)

// If it is not possible, print "No" (without quotes)

// Sample Input 1 

// amit
// mtia
// Sample Output 1

// Yes

function twoStringAndPermutation(str1,str2)
{
   
    str1=str1.split("").sort().join("")
   str2= str2.split("").sort().join("")
     //console.log(str1,str2)
     if(str1 === str2)
     {
         console.log("Yes")
     }
     else{
         console.log("No")
     }
}