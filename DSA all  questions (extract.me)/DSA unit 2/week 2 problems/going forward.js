// A total of n participants took part in the contest (n ≥ k), and you already know their scores. Calculate how many participants will advance to the next round.

// The rule of contest is :"Contestant who earns a score equal to or greater than the k-th place finisher's score will advance to the next round, as long as the contestant earns a positive score..."

// Sample Input 1 

// 8 5
// 10 9 8 7 7 7 5 5
// Sample Output 1

// 6


function runProgram(input){
    var input=input.trim().split("\n")
    
    var n1=input[0].trim().split(" ")
    var n=+n1[0]                    //+ is also user instead of Number
    var k=Number(n1[1])
    var arr=input[1].trim().split(" ").map(Number)
   goingforward(n,k,arr)
}

function goingforward(n,k,arr)
{
    
    var index=0
   
        var count=0;
    for(var i=0;i<n;i++ )
    {
        if(arr[i]>=arr[k-1]&& arr[i]>0)
        {
            //console.log(arr[i])
            count++
        }
    }
    
    console.log(count)
     
        
}