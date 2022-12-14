// Sample Input 1 
// 5
// KamaL
// Sample Output 1
// 34
// Hint
// In the sample test case, the value stored inN = 5, andstr = KamaL
// The number of upper case characters in the string is 2 - K, L
// Therefore, the value of the equation17*x, becomes17*2 = 34, which is the required answer

var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var count=0;

for(var i=0;i<upper.length;i++)
{
    for(var j=0;j<N;j++)
    {
        if(upper[i]==str[j])
        {
            count++
        }
    }
}
console.log(17*count)