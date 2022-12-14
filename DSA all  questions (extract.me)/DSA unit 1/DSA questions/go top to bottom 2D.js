// Sample Input 1 

// 4 3
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12
// Sample Output 1

// 9 10 11 12 8 7 6 5 1 2 3 4
//top to bottom in column

var bag="";
for(var i=(M-1);i>=0;i--)
{
    for(var j=0;j<N;j++)
    {
        bag=bag+matrix[j][i]+" ";
        
    }
}
console.log(bag); 