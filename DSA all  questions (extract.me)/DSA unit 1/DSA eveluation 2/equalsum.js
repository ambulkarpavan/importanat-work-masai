// Sample Input 1 

// 1 8 4 11
// Sample Output 1

// Yes
// Sample Input 2 

// 2 5 7 6
// Sample Output 2

// No
// Hint

// For the first sample a = 1, b = 8, c = 4, d = 11 and it is clearly seen that a+d(1+11) = b+c(8+4) therefore print Yes.

// For the second sample a = 2, b = 5, c = 7, d = 6 and sum of none two elements is equal to sum of other two elements therefore print No.

if((a+b)==(c+d)||(a+c)==(b+d)||(a+d)==(b+c))
{
    console.log("Yes");
}
else{
    console.log("No");
}