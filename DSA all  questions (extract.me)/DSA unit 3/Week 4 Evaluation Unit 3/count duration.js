// Given 4 variables SH,SM,EH and EM  each separated by space(SH=starting hr, SM=starting min, EH=ending hr, EM=ending min), calculate and print the difference between the two times
// Sample Input 1 

// 2
// 1 44 2 14
// 2 42 8 23
// Sample Output 1

// 0 30
// 5 41

function  countTimes(arr)
{
    var x =(arr[0]*60)+arr[1]
    var y = (arr[2]*60)+arr[3]
    var k =y-x
  //  console.log(k/60)
    
    console.log(Math.floor((k/60))+" "+(k%60))
}