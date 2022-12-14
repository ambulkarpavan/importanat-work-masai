// You are provided with a sentence S, your task is to write a program that reverses the order/sequence in which words are present in the sentence keeping the case of each character preserved (upper case character should remain upper and lower case character is lower case). (Refer to the sample test case for better understanding)

// Try using the stack data structure

// DO NOT ANY BUILT-IN FUNCTION FOR REVERSING A STRING

// Sample Input 1 

// A Transformation in education
// Sample Output 1

// education in Transformation A

function masaiSentanceReversal(str)
{
  
  str=str.split(" ")
//   console.log(str.reverse().join(" "))
//console.log(str)
let stack=[]

for(let i=str.length-1;i>=0;i--)
{
    stack.push(str[i])
}
console.log(stack.join(" "))

}