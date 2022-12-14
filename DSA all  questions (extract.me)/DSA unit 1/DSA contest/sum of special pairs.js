// You are given an arrayAofNintegers.

// Write a program to find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.

var sum=0;
var N=6;
var A=[1,2,3,5,7,12];
    for(var i=0;i<N;i++)
    {
        for(var j=i+1;j<N;j++)
        {        
            
                  var count=0;
                  for(var k=1;k<=(j-i);k++)
                 {
                   if((j-i) % k  === 0)
                   {
                       count++
                       
                   }
                   //console.log(count);
                 }
                   if(count==2)
                  {
                   sum=sum+Math.abs(A[i]-A[j]);
                   
                  }
               
            
        }
        
    }
    console.log(sum);
