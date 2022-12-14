// You are given a square matrix of size n. Rows are indexed 1 to n from top to bottom and columns are indexed 1 to n form left to right. Matrix consists of only '*' and '.'. You need to check whether matrix is symmetric or not. if it is, check it is symmetric about vertical axis or horizontal axis or both.

// A matrix is said to be symmetric about horizontal axis if 1st row is identical to n-th row, 2nd is identical to (n-1)th row and so on.

// Sample Input 1 

// 3
// 4
// *.*.
// .*.*
// *.*.
// .*.*
// 3
// .*.
// *.*
// .*.
// 3
// ..*
// **.
// ..*
// Sample Output 1

// NO
// BOTH
// HORI

function checkForSymmetry(n, matrix) {
    //write code here
    //console n,matrix and check the input response
    
   // console.log(n,matrix)
    var mat=[]
    for(var i=0;i<n;i++)
    {
        mat.push(matrix[i].split(""))
    }
   // console.log(mat)
    var n=mat.length
    
     if(checkRowSymmetry(n,mat)==true && checkColSymmetry(n,mat)==true)
    {
        console.log("BOTH")
    }
    else if(checkRowSymmetry(n,mat)==true )
    {
        console.log("HORIZONTAL")
    }
    else if(checkColSymmetry(n,mat)==true){
        console.log("VERTICAL")
    }
    
   
    else{
        console.log("NO")
    }
  
    function checkRowSymmetry(n,mat)
    {
        var top=0;
        var bottom=n-1
       
        while(top<n && bottom>=0)
        {
            for(var j=0;j<n;j++)
            {
                if(mat[top][j] !== mat[bottom][j])
                {
                    return false
                }
            }
            top++
            bottom--
        }
        return true
    }
    
    function checkColSymmetry(n,mat)
    {
        var left=0;
        var right=n-1
        
        while(left<n && right>=0)
        {
            for(var i=0;i<n;i++)
            {
                if(mat[i][left] !== mat[i][right])
                {
                    
                    return false
                }
            }
            left++
            right--
        }
        return true
    }
}