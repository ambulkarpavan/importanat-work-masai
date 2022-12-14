// Given a string, find the length of the smallest sub-string consisting of maximum distinct characters.

// Also note that the output can have reprating characters.

// Suppose string is aaabbbcdcd, but the substring "abbbcd" contains all the distinct characters present in the string (i.e. "a", "b", "c", "d")

// Sample Input 1 

// zoomsessionmooz
// Sample Output 1

// 10


function minLengthSubstringDistinctChar(input)

{
    var max=-Infinity
    var min=Infinity
    var result=""
    for(var i=0;i<input.length;i++)
    {
        var bag=""
        for(var j=i;j<input.length;j++)
        {
            bag=bag+input[j]
             //console.log(bag)
            
     if(DistinctChar(bag).length>max)   //first i am finding max distinct char substring
     {
          
         max=DistinctChar(bag).length
        
     }
          
           
        }
 
    }
   
   var maxLength=max   //this is length of max distinct char substring
   
   var min=Infinity
    for(var i=0;i<input.length;i++)
    {
        var bag=""
        for(var j=i;j<input.length;j++)
        {
            bag=bag+input[j]
       
            
           if(DistinctChar(bag).length==maxLength)  //now we are finding length of min substring which has max distinct char
            {
              if(bag.length<min)
            {
            min=bag.length
            }
     
            }
          
           
        }
 
    }
   console.log(min)
    
    function DistinctChar(bag){
        var max=-Infinity
        var obj={}
        for(var i=0;i<bag.length;i++)
        {
            if(obj[bag[i]]==undefined)
            {
                obj[bag[i]]=1
            }
            else{
                obj[bag[i]]=obj[bag[i]]+1
            }
        }
        
        var distinctCharArr=Object.keys(obj)
  
      
      return distinctCharArr
    }
    
} 