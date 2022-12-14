// Given an integerN, and a pattern. Print the pattern as given in the sample I/O.

// Note: Please check for spaces.
// Sample Input 1 

// 5
// Sample Output 1

// * * * * *
// * * * *  
// * * *    
// * *      
// *  
// Hint

// The following pattern is used to show the spaces that you must have in the program,_is used to indicate the spaces.

// *_*_*_*_*
// *_*_*_*__
// *_*_*____
// *_*______
// *________

// Note: Underscore is only used to indicate spaces and not be printed in the actual program.

function runProgram(input){
    input = input.trim()
    vPattern(input)
    
}

function  vPattern(N)
{
   
for (let i=N-1;i>=0;i--) {
    
let bag = "";
  for (let j = 0; j < (N*2)-1; j++) {
      if(j%2==0 && j<=i*2)
      {
          bag=bag+"*"
      }
      else{
          bag=bag+" "
      }
  }

console.log(bag);

}

 }