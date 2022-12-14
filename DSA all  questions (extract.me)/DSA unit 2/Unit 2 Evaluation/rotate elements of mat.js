// Given a n by n matrix. You have to rotate the elements of each ring of the matrix in the clockwise direction one place.
// Sample Input 1 

// 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// Sample Output 1

// 1 1 2 3
// 1 2 2 4
// 1 3 3 4
// 2 3 4 4

function  rotateElements(n,mat)
{
    var top = 0;
    var bottom = n-1;
    var left = 0;
    var right = n-1;
    var count =0;
    while(top<bottom && left<right)
    {
        var prev = mat[top+1][left]
        for(var j=left;j<=right;j++)
        {
            [current,mat[top][j]] = [mat[top][j],prev]
            prev = current
        }
        top++
        
        for(var i=top;i<=bottom;i++)
        {
            [current,mat[i][right]] = [mat[i][right],prev]
              prev = current
        }
        right--
        
        for(var j=right;j>=left;j--)
        {
            [current,mat[bottom][j]] = [mat[bottom][j],prev]
              prev = current
        }
        bottom--
        
        for(var i=bottom;i>=top;i--)
        {
            [current,mat[i][left]] = [mat[i][left],prev]
              prev = current
        }
        left++
    }
    //console.log(mat)
    for(var i=0;i<mat.length;i++)
    {
        var bag=""
        for(var j=0;j<mat.length;j++)
        {
            bag=bag+mat[i][j]+" "
        }
        console.log(bag)
    }
    
    
}