// Alice is playing a game with his little brother Adam. Alice gives Adam, a stringA, and along with it a bag which contains characters made up of clay are kept.
// Adam has to make the stringA, given to him by Alice, with the help of these characters in the bag. Find out if he can make the string or not.
// Note: The stringAand the bag, both contain only small case characters

// Sample Input 1 

// 5
// aabbc
// 3
// abc
// Sample Output 1

// Yes
// Sample Input 2 

// 5
// aabbc
// 4
// abcd
// Sample Output 2

// N

var count=0;
var obj={}
for(var i=0;i<N1;i++)
{
    if(obj[str1[i]]==undefined)
    {
        obj[str1[i]]=1
    }
    else{
        obj[str1[i]]=obj[str1[i]]+1
    }
}
//console.log(obj)
for(var i=0;i<N2;i++)
{
    for(var key in obj)
    {
        if(str2[i]==key)
        {
            count++
        }
    }
}
//console.log(count)
if(count==str2.length)
{
    console.log("Yes")
}
else{
    console.log("No")
}