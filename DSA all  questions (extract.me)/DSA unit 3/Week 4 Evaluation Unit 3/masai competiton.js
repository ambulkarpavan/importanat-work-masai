// // Masai is organizing a sports fest that is going to run for N days, and everyday M people are going to participate in it. Each player is having some power rating P. The person with higher value of P, wins everyday. You are given the powers of all the people participating everyday. You have to find the winner for everyday, and print their power in the form of a list. Refer the sample I/O for better understanding.

// // Note: Two people may have the same power.

// Sample Input 1 

// 2
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 3 3
// 7 7 1
// 4 3 10
// 1 2 3
// Sample Output 1

// 4 8 12 
// 7 10 3 

function  MasaiCompetitions(N,M,mat)
{
   // console.log(N,M,mat)
   
   var bag=""
  
   for(var i=0;i<N;i++)
   {
        var max = -Infinity
       for(var j=0;j<M;j++)
       {
           if(mat[i][j]>max)
           {
               max = mat[i][j]
           }
       }
       //console.log(max)
       bag = bag+max+" "
   }
   console.log(bag)
}