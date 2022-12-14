//reverse N pattern using just a single loop and square matrix


var mat=[[1,2,3],
         [4,5,6],
         [7,8,9]];
//console.log(mat)
var n=3;
for(var i=(n-1);i>=0;i--)
{
console.log(mat[i][n-1])
}
for(var i=(n-2);i<n;i++)
{
console.log(mat[i][n-i-1])
}
for(var i=(n-2);i>=0;i--)
{
console.log(mat[i][0])
}