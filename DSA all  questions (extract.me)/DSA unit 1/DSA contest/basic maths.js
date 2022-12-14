// You are given an arrayAwithNelements. You are allowed toremove only one element, which makes thesum of all the remaining elements exactly divisible by 7.

// Your task is to find thefirst index of smallest elementthat can be removed from array. If there is no answer print-1.

var sum=0;
    for(var i=0;i<A.length;i++)
    {
        sum=sum+A[i];
    }
    var min=Infinity;
    var index=-1;
    
    for (var i=0;i<A.length;i++)
    {
        if((sum-A[i])%7==0 && min>A[i])
        {
            min=A[i];
            index=i;
        }
    }
    console.log(index);
    