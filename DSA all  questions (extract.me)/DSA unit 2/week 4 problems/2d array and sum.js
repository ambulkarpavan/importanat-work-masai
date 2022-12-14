// You are given an arraymatrixofnrows andmcolumns which contains positive integers and sums.

// You need to find occurrences of the sum of three consecutive numbers (i.e x,y, and z ) whose sum is equal to s appear horizontally, vertically and diagonally in the given matrix.
// Sample Input 1 

// 3 3 6
// 3 2 1
// 2 2 2
// 1 5 1
// Sample Output 1

// 4

function twoArrayAndSum(n, m, matrix, s){
    //write code here

 var count=0;

for(var i=0;i<n;i++)
{    
    for(var j=0;j<m;j++)
    {
        if(j<=(m-3))
        {
          if(matrix[i][j] + matrix[i][j+1] + matrix[i][j+2]==s) //checking rows
          {
              
              count++
              
          }  
          
        }
        if(i<=(n-3))
        {
             if(matrix[i][j] + matrix[i+1][j] + matrix[i+2][j]==s) //checking col
             {
                  count++
             }
        }
         
         if (i<=(n-3) && j<=(m-3))
         {
            if( matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2]==s) //checking forward diag
            {
                count++
            }
            
         }
         if(i>=2 && j<=(m-3))
        {
             if( matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2]==s) //checking backward diag
             {
                 count++
             }
        }
    }
}

        
console.log(count)


}