// L is a famous detective in the anime series Death Note and is known for solving puzzles and riddles for investigation.

// There is a security breach in Tokyo Police and they want L's help.He is given the security matrix of dimension [nxm] by the police.

// L decodes that his rival Light has breached the security matrix and has followed a specific way of accessing the matrix. Below is the image of its traversal. Surprisingly, the traversal is in the L shape.

// Sample Input 1 

// 2
// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// Sample Output 1

// 1 4 7 8 9 2 5 6 3 
// 1 4 7 10 11 12 2 5 8 9 3 6 

function Ltraverse(N,M,mat)
{
   // console.log(N,M,mat)
    
    var count=0;
    var left=0;
    var bottom=N-1;
    var top=0
    var right = M-1;
    var bag=""
    while(count<N*M)
    {
        for(var i=top;i<=bottom && count<N*M ;i++)
        {
            bag=bag+mat[i][left]+" "
            count++
        }
        left++
        for(var j=left;j<=right && count<N*M ;j++)
        {
            bag=bag+mat[bottom][j]+" "
            count++
        }
        bottom--
    }
    console.log(bag)
}