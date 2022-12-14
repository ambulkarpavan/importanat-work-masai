// Given a string S. Your task is to remove all duplicates characters from the string S

// NOTE:

// 1.) Order of characters in output string should be same as given in input string.

// 2.) String S contains only lowercase characters ['a'-'z'].
// Sample Input 1 

// iloveprogramming
// Sample Output 1

// iloveprgamn

function removeDuplicate(str)
{
    //console.log(str)
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
    console.log(Object.keys(obj).join(""))
}