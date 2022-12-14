// You are given some matrices consist of only 0 's and 1's and you have to pick which are symmetric and which are not

// A matrix is said to be symmetric about X- axis if 1st row is identical to n-th row, 2nd is identical to (n-1)th row and so on.

// A matrix is said to be symmetric about Y- axis if 1st column is identical to the nth column, 2nd identical to (n-1)th and so on for all columns.

// Your task is to print "YES" if it is symmetric about X-axis and Y-axis else "NO"

// Note : You don't have to take the input
// Just complete the function and print the required output
// Sample Input 1 

// 5
// 2
// 11
// 11
// 4
// 0101
// 0110
// 0110
// 0101
// 4
// 1001
// 0000
// 0000
// 1001
// 5
// 01110
// 01010
// 10001
// 01010
// 01110
// 5
// 00100
// 01010
// 10001
// 01010
// 01110
// Sample Output 1

// YES
// NO
// YES
// YES
// NO




if(checkRowsSymmetry(n,mat)==true &&checkColumnSymmetry(n,mat)==true)
{
    console.log("YES")
}
else{
    console.log("NO")
}


function checkRowsSymmetry(n,mat)
{
    var top=0;
 var bottom=n-1;
 
 while(top<n && bottom>=0)
 {
     for(var j=0;j<n;j++)
     {
         if(mat[top][j] != mat[bottom][j])
         {
             return false
         }
     }
     top++;
     bottom--
 }
 return true
}

function checkColumnSymmetry(n,mat)
{
     var left=0;
 var right=n-1
 
 while(left<n && right>=0)
 {
     for(var i=0;i<n;i++)
     {
         if(mat[i][left] != mat[i][right])
         {
             return false
         }
     }
     left++;
     right--
 }
 return true
}
