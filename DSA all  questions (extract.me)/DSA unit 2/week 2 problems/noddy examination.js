// Noddy has an exam in which each question has a difficulty level in the form of an Integer. Now, Noddy can only solve the problems that have difficulty level less than or equal to X. Now the rules are-

// The score of the student is equal to the maximum number of answers he/she has attempted without skipping a question.

// The student is allowed to skip just "one" question that will not be counted in the continuity of the questions.

// Note- Assume the student knows the solution to the problem he/she attempts and always starts the paper from the first question.

// Given the number of Questions, N, the maximum difficulty level of the problem Noddy can solve, X, and the difficulty level of each question in the form of an array

// Determine the maximum score that Noddy can score?
// Sample Input 1 

// 7 6
// 4 3 7 6 7 2 2
// Sample Output 1


function runProgram(input){
    var input=input.trim().split("\n")
   
    var N1=input[0].trim().split(" ")
    var N=Number(N1[0])
    var X=Number(N1[1])
    var arr=input[1].trim().split(" ").map(Number)
     examination(N,X,arr)
}

function examination(N,X,arr)
{
    var count=0;
    var count1=0
    for(var i=0;i<N;i++)
    {
        if(arr[i]<=X && count1<2)
        {        //console.log(arr[i])
            count++
            
        }
        else{
            count1++
        }
    }
    console.log(count)
}
 