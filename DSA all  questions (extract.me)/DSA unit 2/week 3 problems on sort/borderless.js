// You are given a matrix A of size N X M. Find the sum of all the elements in the matrix which do not lie at the border.
// Sample Input 1 

// 4 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16
// Sample Output 1

// 34

function sumWithoutBorders(N, M, matrix){
    //write code here
  var sum=0;
  for(var i=1;i<=N-2;i++)
  {
      for(j=1;j<=M-2;j++)
      {
          sum=sum+matrix[i][j]
          
      }
  }
  console.log(sum)
}