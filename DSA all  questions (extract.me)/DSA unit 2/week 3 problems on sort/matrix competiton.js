// You are given two matrices (2D array). The first array A (n rows and m columns) and second array B (i rows and j columns).

// Output sum of the matrix which is greater than the sum of other matrix.
// Sample Input 1 

// 3 4
// 1 2 3 4
// 0 5 6 1
// 9 3 0 8
// 2 2
// 8 8
// 8 8
// Sample Output 1

// 42

function maxsum(n,m,mat1,i,j,mat2)
{
  var sum1=findsum(n,m,mat1);
  var sum2=findsum(i,j,mat2);
  var max=-Infinity
  //console.log(sum1,sum2)
  function findsum(N,M,mat)
  {var sum=0;
      for(var i=0;i<N;i++)
      {
          for(var j=0;j<M;j++)
          {
              sum=sum+mat[i][j]
          }
      }
      return sum;
  }
  if(sum1>sum2)
  {
      sum=sum1
      console.log(sum)
  }
  else{
      sum=sum2
       console.log(sum)
  }
}