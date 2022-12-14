// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets enclose a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// It contains no unmatched brackets.

// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

// Given a string, you have to comment if it is balanced or not

// Sample Input 1 

// 3
// {([])}
// ()
// ([]
// Sample Output 1

// balanced
// balanced
// not balanced

function againClassicalProblem(str)
{
    
if(str.length %2 ==1)
    {
        console.log("not balanced")
    }
   
else{  
    var stack=[]
var flag=0
        for(var i=0;i<str.length;i++)
        {    
            if(str[i]==="("||str[i]==="{"||str[i]==="[")
            {
                stack.push(str[i])
            }
            else
            {
                
                if(returnpair(str[i])!==stack[stack.length-1])
                { 
                    //console.log("not balanced")
                    flag=1
                }
                else{
                    stack.pop()
                   
                }
                
            }
            
        }
       
     if(stack.length>0 || flag==1)
             {
           
             console.log("not balanced")
             }
             else{
                console.log("balanced")
              }
    
      }
    function returnpair(str)
    {
        if(str==")")
        {
            return "("
        }
         if(str=="}")
        {
            return "{"
        }
         if(str=="]")
        {
            return "["
        }
    }
    
    
    
    
    

//  let p1="()"
// let p2="{}"
// let p3="[]"

// var left=0;
// var right=str.length-1
// let bag=""
// let flag=true
// var count=0
// var sack=""
// var i=0;
// var j=i+1;

// while(left<right && i<j && j<str.length)
// {
//     bag=str[left]+str[right]
//     sack=str[i]+str[j]
//     if(bag === p1 || bag === p2 || bag === p3 )
//     {
//       count++
       
//         left++
//         right--
     
//     }
//     else if(sack===p1||sack===p2||sack===p3)
//     {
//         count++
//           i++
//         j++
//     }
//     else{
//         left++
//         right--
//         i++
//         j++
//     }

//}
//console.log(count)
// if(count===str.length/2)
// {
//     console.log("balanced")
// }
// else{
//     console.log("not balanced")
// }
}