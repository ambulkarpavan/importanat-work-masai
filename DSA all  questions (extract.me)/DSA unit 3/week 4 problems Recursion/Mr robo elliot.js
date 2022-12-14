// Mr.Robot needs an encryption method, so Elliott was there to help him. At the same time, Richard wrote a paper on encryption. Elliott then started writing his algorithms with the help of paper from Richard but he needs your help in implementing. The algorithm is like this:

// Given an input string, the encrypted string will start with the middle character of the string and will be formed henceforth with the middle characters of the left and right substrings (of the middle character of the word) and so on. Take a look at the explanation of the sample test case for better understanding.

// Sample Input 1 

// 3
// 3
// abc
// 4
// abcd
// 11
// abcdefghijk
// Sample Output 1

// bac
// bacd
// fcabdeighjk

function  mrRootEliot(N,str)
{  
    var ans = ""
    
   
    function recursion(str,low,high,ans)
    { 
        if(low>high)
        {
            return ans;
        }
        
        
        var length = (low+high)/2
      var mid = Math.floor(length);
    
      ans =ans+str[mid]+recursion(str,low,mid-1,ans)+recursion(str,mid+1,high,ans);
 
      return ans;
      
    }
    
     console.log(recursion(str,0,str.length-1,ans))
    
    
}