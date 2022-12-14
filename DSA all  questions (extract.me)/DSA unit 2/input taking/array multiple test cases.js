function runProgram(input){
    input=input.trim().split("\n")
    var tc= +(input[0])   //test cases convert into number
    var line=1;
    
    for(var i=0;i<tc;i++)
    {
        var length= +(input[line])
        line++
        var arr= input[line].trim().split(" ").map(Number)
        line++
       // console.log(length,arr)
        Adding1(length,arr)
    }
    
    
    function Adding1(length,arr)
    {
        var bag=0;
        for(var i=0;i<length;i++)
        {
            bag=bag+(arr[i]+1)+" "
        }
        console.log(bag)
    }
}