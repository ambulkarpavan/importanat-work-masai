// You are given a matrix of size n x m , and two types of queries are to be performed on this matrix. The two types of queries are

// q = 1, for this type of query, the matrix is to be traversed, as shown in Fig. 1

// q = 2, for this type of query, the matrix is to be traversed as shown in Fig. 2

// Sample Input 1 

// 2
// 3 3 1
// 1 2 3
// 4 5 6
// 7 8 9
// 3 3 2
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 2 3 6 5 4 7 8 9 
// 3 2 1 4 

// snake traversal according to q condition


function masaiTraversalAndQueries(N, M, q, arr){
    //write code here
    //console.log(q)
    if(q===1)
    {
        var bag=""
        
        for(var i=0;i<N;i++)
        {
            if(i % 2 == 0)
            {
                for(let j=0;j<M;j++)
                {
                  bag=bag+arr[i][j]+" "
                }
               
            }
            else{
                for(let k=(M-1);k>=0;k--)
                {
                    bag=bag+arr[i][k]+" "
                }
            }
    }
       
       
        console.log(bag)
    }
   
    else{
      var sack=""
        for(var i=0;i<N;i++)
        {
             if(i%2==0)
              {
                  for(let l=(M-1);l>=0;l--)
                   {
                    sack=sack+arr[i][l]+" "
                    }
               
               }
         else{
          
          for(let m=0;m<M;m++)
            {
                 sack=sack+arr[i][m]+" "
            }   
         }
    }
     console.log(sack)
   
    }
   
}