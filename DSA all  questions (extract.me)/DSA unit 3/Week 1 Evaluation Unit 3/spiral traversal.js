// Description

// You are given a square matrix of size N x N.

// You have to print the spiral traversal of the matrix.

// Refer the figure given below for better understanding.

// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 4 7 8 9 6 3 2 5 

function spiralTravel(N,mat)
{
    var top = 0;
    var bottom =N-1
    var left =0;
    var right= N-1;
    var bag=""
    var count=0;
    
    while(count<N*N)
    {
        for(i=top; i<=bottom && count<N*N;i++)
        {
            bag = bag + mat[i][left] + " "
          count++
        }
        left++
        
        for(var j=left; j<=right && count<N*N; j++)
        {
            bag = bag + mat[bottom][j] + " "
              count++
        }
        bottom--
        
        for(var i=bottom; i>=top && count<N*N; i--)
        {
            bag = bag + mat[i][right] + " "
              count++
        }
        right--
        
        for(var j=right; j>=left && count<N*N; j--)
        {
            bag = bag + mat[top][j]+ " "
              count++
        }
        top++
        
   }
   console.log(bag)
}