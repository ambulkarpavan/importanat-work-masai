// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word anagram can be rearranged into nag a ram.

// Given 2 phrases, write a program that detects if both are anagrams of each other.

// If both are anagrams, print "True"

// Else print "False"
// Sample Input 1 

// anagram
// nag a ram
// Sample Output 1

// True

function angaramDetect(str1,str2)
{
    
    var str1=str1.split(" ").join("")
    var str2=str2.split(" ").join("")
    str2=str2.split("").sort().join("")
    str1=str1.split("").sort().join("")
   // console.log(str1, str2)

  if(str1 === str2)          //it will compare its value as well as its datatype
  {                           //so we can easily comapre any str and number also by
      console.log("True")     //conveting to string
  }
  else{
      console.log("False")
  }
    
    
    
    
 //   console.log(bag)
    
    
    
 var obj2=mapobj(str2)
 var obj1=mapobj(str1)
 
 function mapobj(str)
 {
     var obj={}
     for(var i=0;i<str.length;i++)
     {
         if(obj[str[i]]==undefined)
         {
             obj[str[i]]=1
         }
         else{
             obj[str[i]]=obj[str[i]]+1
         }
     }
     return obj
 }
 //console.log(obj1,obj2)

 var key1=Object.keys(obj1)
 var key2=Object.keys(obj2)
 var count=0

for(var keys1 in obj1)
{
    for(keys2 in obj2)
    {
        if(keys1==keys2 && obj1[keys1]>= obj2[keys2])
        
        {
            count++
        }
    }
}
// console.log(count,key1)
//  if(key2.length==count)
//  {
//      console.log("True")
//  }
//  else{
//      console.log("False")
//  }
}