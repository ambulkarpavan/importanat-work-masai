// Given a string s of length n, find out if it's possible to make it palindrome by rearranging their characters.

// Print "Yes" if it is possible else "No" (without quotes

//     Sample Input 1 

// 3
// 1
// a
// 3
// aab
// 4
// abbb
// Sample Output 1

// Yes
// Yes
// No

function detectPalindromRearrang(N,str)
{
   // console.log(N,str)
   
   var obj={}
   
   for(var i=0;i<N;i++)
   {
       if(obj[str[i]]==undefined)
       {
           obj[str[i]]=1
       }
       else{
           obj[str[i]]=obj[str[i]]+1
       }
   }
   var count=0;
   var flag=true
   for(var key in obj)
   {
       if(obj[key]%2==1 )
       {
           
           count++
       }
       
   }
   if( count>1)
 {
     console.log("No")
 }
 else{
     console.log("Yes")
 }
}