//check its given statement
// Sample Input 1 

// 3
// 2
// 3 1
// 7
// 5 3 1 2 5 1 2
// 9
// 1 3 2 2 3 2 2 2 7
// Sample Output 1

// -1 -1
// 1 3
// 3 3 


var max= -Infinity;
var indexarr=[];

for(var i=1;i<(N-1);i++)
{
    if((arr[i]<arr[i-1] &&arr[i]<arr[i+1])|| (arr[i]>arr[i-1] && arr[i]>arr[i+1])) 
     {
         indexarr.push(i);
                     //  console.log(indexarr)
     }
    
}

if(indexarr.length <2)
{
    console.log(-1,-1)
}
else{
    max=indexarr[indexarr.length-1]-indexarr[0]
    var min= Infinity;
    var diff=0;
    
    for(var j=0;j<(indexarr.length-1);j++)
    { 
         diff= indexarr[j+1]-indexarr[j];
       
        if(min>diff)
        {
            
            min=diff
        }
    }
    console.log(min,max)
}