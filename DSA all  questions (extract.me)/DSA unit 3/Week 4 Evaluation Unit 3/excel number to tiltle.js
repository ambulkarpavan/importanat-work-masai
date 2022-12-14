// Sample Input 1 

// 3
// 1
// 27
// 701
// Sample Output 1

// A
// AA
// ZY

function numToTitle(num)
{
   // console.log(num)
   
 
    var char="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var bag=""
    while(num>0)
    {
        var rem = num%26
    //    console.log(rem)
        if(rem ==0)
        {
            bag=bag+"Z"
            num =Math.floor((num/26)-1)
        }
        else{
            bag=bag+char[rem-1]
            num = Math.floor(num/26)
        }
    }
    console.log(bag.split("").reverse().join(""))
}