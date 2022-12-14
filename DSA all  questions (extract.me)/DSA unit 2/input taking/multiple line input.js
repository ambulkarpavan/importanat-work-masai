function runProgram(input){
    input=input.trim().split("\n")
    var N=Number(input[0])
    var arr=input[1].trim().split(" ").map(Number)
    var salary=Number(input[2])
    //console.log(salary)
     moneymanage(N,arr,salary)
}