//find no of subtrings whose start and end are same

// function checkstart(bag){
      
//     for(var i=0;i<bag.length;i++)
//     {    
//         if(bag[0]==bag[bag.length-1])
//         {
//            return true;
//         }
//     }
// }
var s="abcab"
var count=0;
  for(var i=0;i<s.length;i++)
  {
      var bag="";
      for(var j=i;j<s.length;j++)
     {
              bag=bag+s[j]
             if(bag[0]==bag[bag.length-1])
             {
                 count++
             }
      }
  }
  console.log(count)