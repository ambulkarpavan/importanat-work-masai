// Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.

// Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20. These hacks can be used any number of times.Can Nick help Tom with his hacks?
// Sample Input 1 

// 5
// 1
// 2
// 10
// 25
// 200
// Sample Output 1

// Yes
// No
// Yes
// No
// Yes

function nickAndHacks(target)
{
   
    var current = 1
    
    function recursive(current,target)
    {
        //console.log(current)
     if (current == target)
     {
         return true
     }
     if(current>target)
     {
         return false
     }

    return  recursive(10*current, target) || recursive(20*current,target)
        //if true or false it will return true becz of "or" operator

    }
    
    
    
    if(recursive(current,target)===true)
    {
         console.log("Yes")
    }
    else{
        console.log("No")
    }

}
