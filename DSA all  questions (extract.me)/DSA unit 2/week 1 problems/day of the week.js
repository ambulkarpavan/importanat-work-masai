// Given the current day, and a number N, find what day will it be after N days.

// Note:Current day will be from the set ->{"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"}

// Sample Input 1 

// Wednesday
// 8
// Sample Output 1

// Thursday

var arrday=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  
  var bag=""
 for(var i=0;i<7;i++)
 {
     if(arrday[i]==day)
     {
         bag=arrday[(i+N)%7]
     }
 }
 console.log(bag)

//sec approach using obj
//  var obj={}
// for(var i=0;i<arr.length;i++)
// {
//     if(obj[arr[i]]==undefined)
//     {
//         obj[arr[i]]=i
//     }
    
// }
// //console.log(obj)

// var value=((obj[day]+N)%7)   
// for(var key in obj)
// {
//     if(obj[key]==value)
//     {
//         console.log(key)
    
//     }
// }