// You are given a string A, of length N, and a character K. Find the count of all the substrings of A, which end at K.

// Note: The string A contains only lower case characters.
// Sample Input 1 

// 1
// 4
// aman
// a
// Sample Output 1

// 4

function substringEndWithk(N,str,k)
{
    var count=0
    for(var i=0;i<N;i++)
    {
        var bag=""
        for(var j=i;j<N;j++)
        {
            bag=bag+str[j]
            //console.log(bag)
            if(bag[bag.length-1]==k)
            {
                count++
            }
        }
    }
    console.log(count)
}