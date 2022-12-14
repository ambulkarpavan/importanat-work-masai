// Given a string s, recursively remove adjacent duplicate characters from the string s. The output string should not have any adjacent duplicates.

// If string becomes empty after removing duplicates print "Empty String" else print the output string.

// Sample Input 1 

// 4
// azxxxzy
// caaabbbaac
// gghhg
// aaaacddddcappp
// Sample Output 1

// ay
// Empty String
// g
// a

function sumRecursion(str)
{
 // console.log(str)
var ans = ""
  function recursion(str,ans)
  {
  if(str.length === 0)
  {
      console.log("Empty String")
      return
  }
  if(str.length === 1)
  {
      console.log(str)
      return
  }
  
  for(var i=0;i<str.length;i++)
  {
     if(i === 0)
      {
          if(str[i] !== str[i+1])
          {
              ans = ans + str[i]
          }
      }
    else if(i === str.length-1)
      {
          if(str[i] !== str[i-1])
          {
              ans = ans + str[i]
          }
      }
   else{
          if(str[i] !== str[i+1] && str[i] !== str[i-1])
          {
              ans = ans + str[i]
          }
      }
  }
  
  if(str === ans)
  {
      console.log(ans)
      return
  }
  
      recursion(ans,"");
  
   

  }
   recursion(str,ans)
}
 