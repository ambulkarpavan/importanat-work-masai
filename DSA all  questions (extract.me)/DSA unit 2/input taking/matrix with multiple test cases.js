//multiple test cases for matrix


function runProgram(input){
    input=input.trim().split("\n")
   //console.log(input)
   var testcases= +input[0]
   var line=1;
   
   for(var i=0;i<testcases;i++)
   {
       var [N,M]= input[line++].trim().split(" ").map(Number)  //post incre for line
       var matrix=[];
       //console.log(N,M)
       for(var j=0;j<N;j++)
       {
           matrix.push(input[line++].trim().split(" ").map(Number))
              
       }
      // console.log(N,M,matrix)
      rectmatrixadd1(N,M,matrix)
   }
 
}

function rectmatrixadd1(N,M,matrix)
{
    for(var i=0;i<N;i++)
    {
        var bag=""
        for(var j=0;j<M;j++)
        {
            bag=bag+((matrix[i][j])+1)+" "
        }
        console.log(bag)
    }
}

 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}