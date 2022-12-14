// You are visiting a friend at her housewarming party. When you arrive at her house, you see a queue of people standing outside waiting to go inside. Everybody is holding a present in their hands, and since there aren't many gift shops nearby, most of them end up buying the same gift for her. As more and more people keep joining the queue, you are curious to find the first unique gift in the line. You sit and examine the row after a new person arrives; when he does, you examine the queue from front to back to find out which is the first different gift and add it to your list.

// Note-If after a new person arrives no gift is unique in the queue add '#' to the output
// Sample Input 1 

// 2
// abadbc
// abcabc
// Sample Output 1

// aabbdd
// aaabc#

function uniqueGift(str)
{
  
   
    var que = []
    let ans =""
       var obj ={}
    for(let i=0; i<str.length; i++)
    {
       que.push(str[i])
      
     
        if(obj[que[que.length-1]] == undefined)
        {
            obj[que[que.length-1]] = 1
        }
        else{
             obj[que[que.length-1]] = obj[que[que.length-1]]+1
        }
         
        //console.log(obj)
        while(obj[que[0]] > 1)
        {
            que.shift()
           
        }
           if(que.length === 0)
           {
               ans=ans+"#"
           }
           else{
               ans = ans + que[0]
           }
        
    }
 console.log(ans) 
}