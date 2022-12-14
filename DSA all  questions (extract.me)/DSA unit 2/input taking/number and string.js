function runProgram(input){
    input=input.trim().split("\n")
   var N=Number(input[0]);
   var str=input[1]
  strchar(N,str)
}
function strchar(N,str)
{
    for(var i=0;i<N;i++)
    {
        console.log(str[i])
    }
}