// You are given two numbers nand k. The number p iscreated by concatenating the string n k times.

// we need to find thesuper digit ofthe integer p

// We definesuperdigit of an integer pusing the following rules:

// If p has only 1 digit, then itssuperdigit is 1.
// Otherwise, thesuperdigit of p is equal to thesuperdigit of the sum of the digits of p.
// Read the Sample input explanation for better understanding.
// Sample Input 1 

// 148 3
// Sample Output 1

// 3
// Sample Input 2 

// 123 3
// Sample Output 2

// 9

function runProgram(input){
    let [N,K] = input.trim().split(" ")
    superDigit(N,K)
    
}

function superDigit(N,K)
{
   //N,K is strings as a input
  
function superDigit(p)
{
    
      if(p.length == 1)
      {
          return +p
      }
      
      var temp =0;
      for(let ele of p)
      {
          temp += +ele
      }
      
      
      return superDigit(temp.toString())
}


var sum =0;
for(let ele of N)
{
    sum += +ele
}

 p =(sum*(+K)).toString()  //first we are finding sum of a given number the multiply it with k becz if we multiply at satrt it will be huge number

 var ans = superDigit(p)
 console.log(ans)
  
 
} 
