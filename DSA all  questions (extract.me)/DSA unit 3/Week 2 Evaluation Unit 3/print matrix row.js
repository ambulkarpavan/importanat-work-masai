// You are given a matrix of size N x M. You have to print all the odd indexed rows.

// Note: Indexing in the matrix starts from 0.
// Sample Input 1 

// 4 3
// 1 2 3 
// 4 5 6
// 7 8 9
// 10 11 12
// Sample Output 1

// 4 5 6
// 10 11 12

function     printOddRow(N,M,mat)
{
    //console.log(N,M,mat)
    for(var i=0;i<N;i++)
    {
        var bag=""
        if(i%2==1)
        {
            for(var j=0;j<M;j++)
            {
                bag=bag+mat[i][j]+" "
            }
            console.log(bag)
        }
        
    }
}