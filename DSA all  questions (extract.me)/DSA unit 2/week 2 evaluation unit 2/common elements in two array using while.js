
// Sample Input 1 

// 2
// 6
// 1 2 3 4 5 6
// 3
// 3 3 5
// 4 
// 1 2 3 4
// 4 
// 5 6 7 8
// Sample Output 1

// 3 5
//-1


function  commonelement(N1,arr1,N2,arr2)
{    
 var i=0;
 var j=0;
 var bag=""
 while(i<N1 && j<N2)
 {
     if(arr1[i]==arr2[j])
     {
         bag=bag+arr1[i]+" "
         i++;
         j++
     }
     else if(arr1[i]<arr2[j])
     {
         i++
     }
     else{
         j++
     }
 }
   if(bag.length==0)
   {
       console.log(-1)
   }
   else{
   console.log(bag)
   }
}
 