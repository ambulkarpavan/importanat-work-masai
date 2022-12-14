// Sample Input 1 

// 4 3
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12
// Sample Output 1

// 4 3 2 1 5 6 7 8 12 11 10 9



 var bag="";
 for(var i=0;i<M;i++)
 {
     for(var j=(N-1);j>=0;j--)
     {
         bag=bag+matrix[j][i]+" ";
         
     }
 }
console.log(bag);
