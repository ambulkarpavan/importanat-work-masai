// Sample Input 1 

// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8
// Sample Output 1

// 4 8 4 8
// 3 7 3 7
// 2 6 2 6
// 1 5 1 5


for(var j=(R-1);j>=0;j--)
{var bag="";
    for(var i=0;i<R;i++)
    {
        bag=bag+matrix[i][j]+" ";
        
    }
    console.log(bag)
}