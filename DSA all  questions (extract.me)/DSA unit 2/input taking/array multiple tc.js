function runProgram(input){
    input=input.trim().split("\n")
    var tc= +(input[0])
    var line=1;
    
    for(var i=0;i<tc;i++)
    {
        var [size,k]=input[line].trim().split(" ").map(Number)   //destructuring
        line++
        var arr=input[line].trim().split(" ").map(Number)
        line++
        // console.log(size,k,arr)
        printarr(size,k,arr)
    }
    
}
function printarr(size,k,arr)
{
    var bag=0;
    for(var i=0;i<size;i++)
    {
        bag=bag+(arr[i]+k)+" "
    }
    console.log(bag)
}