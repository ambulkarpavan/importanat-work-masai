// Motu decided to visit his friend Potlu. It turned out that the Motu's house is located at point 0 and his friend's house is located at point x (x > 0) of the coordinate line. In one step the Motu can move 1, 2, 3, 4 or 5 positions forward.

// Determine, what is the minimum number of steps he need to make in order to get to his friend's house.
// Sample Input 1 

// 26
// Sample Output 1

// 6

function  motuPatlu(input)
{
   // console.log(typeof input)
    var ans =0
    ans = Math.floor(input/5)
  
    var rem =(input%5)
    
    if(rem ==0)
    {
        console.log(ans)
    }
    else{
       console.log( ans+1)
    }
    
    
    
    
    
    //  var arr =[1,2,3,4,5]
    // for(var i=0;i<arr.length;i++)
    // {
    //     if(arr[i] ==rem)
    //     {
    //         ans =ans+1
    //         break
    //     }
    // }
    // console.log(ans)
}