// You are given an arraymatrixofnrows andmcolumns which contains lower case English letters.

// How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?
// Sample Input 1 

// 5 5
// safer
// amjad
// babol
// aaron
// songs
// Sample Output 1

// 2

var count=0;
   
for(var r=0;r<n;r++)
{
       for(var c=0;c<m;c++)
       {
           if(c<=m-4)
           {
               if(matrix[r][c]=="s"&&matrix[r][c+1]=="a"&&matrix[r][c+2]=="b"&&matrix[r][c+3]=="a")
               {
                   count++;    //checking horizontally
               }
               
           }
           if(r<=(n-4))
           {
               if(matrix[r][c]=="s"&&matrix[r+1][c]=="a"&&matrix[r+2][c]=="b"&&matrix[r+3][c]=="a")
               {
                   count++;////checking vertically
               }
           }
           if(r<=n-4 && c<=m-4)
           {
               if(matrix[r][c]=="s"&&matrix[r+1][c+1]=="a"&&matrix[r+2][c+2]=="b"&&matrix[r+3][c+3]=="a")
               {
                   count++;//checking in backward diagonal
               }
           }
            if(r >= 3 && c<=m-4)
            {
                 if(matrix[r][c] == "s" && matrix[r-1][c+1] == "a" && matrix[r-2][c+2] == "b" && matrix[r-3][c+3] == "a")
                   {
                       count++   ////checking in forward diagonal
                   }
            }
            
       }
   }
   console.log(count);