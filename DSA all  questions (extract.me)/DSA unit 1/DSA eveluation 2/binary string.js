// Sample Input 1 

// 6
// 001001
// Sample Output 1

// 4
// Sample Input 2 

// 5
// 00100
// Sample Output 2

// 0
// Hint

// In the first sample test case, the value stored inN = 6, andstr = 001001. The longest substring starting with 1 and ending at 1, is1001, whose length is 4. Therefore, the required output is 4

// In the second sample test case, the value stored inN = 5, andstr = 00100. The number of 1's present in the string is 1. Therefore, the required output is 0
var str="001001";
var N=6;
function chechstartandend(bag){
    var sack="";
 for(var i=0;i<bag.length;i++)
 {
     if(bag[i]==1 && bag[bag.length-1]==1)
     {//console.log(bag);
         return true;
     }
     else{
         return false;
     }
         
 }
   
}


var max=-Infinity;
for(var i=0;i<N;i++)
{
   var bag="";
   for(var j=i;j<N;j++)
   {
       bag=bag+str[j];
       
       if(chechstartandend(bag)==true && max<bag.length){
           max=bag.length
           
       }
   }
}

if(max>1)
{
   console.log(max);
}
else
{
   console.log(0);
}