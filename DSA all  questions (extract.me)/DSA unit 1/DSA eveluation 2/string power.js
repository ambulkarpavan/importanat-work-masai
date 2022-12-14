// Sample Input 1 

// 6
// ankush
// Sample Output 1

// 38
// Hint

// In the sample test case, the value stored inN = 6, andstr = ankush. Therefore, the number of vowels = 2, and consonants = 4

// Therefore, the value of the equation becomes :5*2 + 7*4 = 38. Therefore, the required output is38

var vcount=0;
var ccount=0;

for(var i=0;i<N;i++)
{
    if(str[i]=="a"||str[i]=="e"||str[i]=="o"||str[i]=="i"||str[i]=="u")
{
    vcount++
}
    
}
    ccount=N-vcount;
    