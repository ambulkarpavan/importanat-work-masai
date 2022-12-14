// You are given a binary matrix of size N x M. A binary matrix is one which consists of only 1's and 0's. You have to flip the matrix. Flipping the matrix means converting all 1's to 0's and all 0's to 1's.
// Sample Input 1 

// 3 2
// 1 0
// 0 1
// 1 1
// Sample Output 1

// 0 1 
// 1 0 
// 0 0 

function binaryMatrix(N,M,mat)
{
    for(var i=0;i<N;i++)
    {
        var bag=0
        for(var j=0;j<M;j++)
        {
            if(mat[i][j]== 1)
            {
                bag=bag+0+" "
            }
            else{
                bag=bag+1+" "
            }
        }
        
        console.log(bag)
    }
}