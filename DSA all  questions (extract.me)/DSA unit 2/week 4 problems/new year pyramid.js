// You have decided to build a pyramid of stones on this new year. The simple rule is that the top level of the pyramid must consist of 1 stone, the second level must consist of 1 + 2 = 3 stones, the third level must have 1 + 2 + 3 = 6 stones, and so on.

// Effectively, the i-th level of the pyramid contains 1 + 2 + ... + (i - 1) + i stones.

// You have got n stones and have to build a pyramid from them.

// Team Masai wants to know what is the maximum height of the pyramid that you can make using the given stones.

// Sample Input 1 

// 25
// Sample Output 1

// 4


function pyramind(N)
 {
     var sum=0;
     var count=0
     var sum1=0
     for(var i=1;i<N;i++)
     {
         
         sum=sum+i
         
         sum1=sum1+sum
         if(sum1<=N)
         {
         count++
          //console.log(sum1)
         }
     }
    //console.log(count)
    
    //or sec approach
    var level=0;
    while(N>0)
    {
        var required=Math.floor(level*(level+1)/2)
        
        if(required>N)
        {
            break;
        }
        level++
        N=N-required
    }
    console.log(level-1)
 }
