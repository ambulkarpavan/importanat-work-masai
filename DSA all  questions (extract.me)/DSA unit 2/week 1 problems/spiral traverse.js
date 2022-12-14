// Sample Input 1 
// 2
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// Sample Output 1
// 1 5 9 10 11 12 8 4 3 2 6 7 
// 1 4 7 10 11 12 9 6 3 2 5 8 



 var top=0;
 var bottom=(N-1)
 var left=0;
 var right=(M-1)
 var count=0;
 var bag=""

 while(count<N*M){
    for(var i=top;i<=bottom && count<N*M;i++)
    {
        bag=bag+arr[i][left]+" "   // left column element
        count++
    }
    left++
    for(var i=left;i<=right && count<N*M;i++)
    {
        bag=bag+arr[bottom][i]+" "   // last line element
        count++
    }
    bottom--;
    for(var j=bottom;j>=top && count<N*M;j--)
    {
        bag=bag+arr[j][right]+" ";     //last column element
        count++
    }
    right--;
    for(var i=right;i>=left && count<N*M;i--)
    {
        bag=bag+arr[top][i]+" "    //first line element
         
        count++
    }
    top++;
    }
   
    console.log(bag)
