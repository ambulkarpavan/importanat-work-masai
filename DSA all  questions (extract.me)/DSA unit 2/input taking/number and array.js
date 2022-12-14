function runProgram(input){
    
    input=input.trim().split("\n")
    var N=Number(input[0]);
    var arr=input[1].trim().split(" ").map(Number)
    Eveninarray(N,arr)
    
}

function Eveninarray(size,array)
{
    for(var i=0;i<size;i++)
    {
        if(array[i]%2==0)
        {
            console.log(array[i])
        }
    }
}