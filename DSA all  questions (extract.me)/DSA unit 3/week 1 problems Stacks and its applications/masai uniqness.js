// You are given a string S. Your task is to write a program that comments if it has all unique character or not (no repeated character).

// If it has just unique character, output "Unique"

// Else in all other cases, output "No"

// Sample Input 1 

// masai
// Sample Output 1

// No

function masaiUniqness(str)
{
    let obj={}
    for(let i=0;i<str.length;i++)
    {
        if(obj[str[i]]==undefined)
        {
            obj[str[i]]=1
        }
        else{
            obj[str[i]]=obj[str[i]]+1
        }
    }
 //   console.log(obj)
    let flag=true
    for(let key in obj)
    {
        if(obj[key]%2==0)
        {
            flag=false
        }
    }
    
    if(flag==false)
    {
        console.log("No")
    }
    else{
        console.log("Unique")
    }
}