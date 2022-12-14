// The vaccine for corona virus is in short supply, therefore, the Scientists at the University of Masai, came up with certain number of chemical compounds which on combining can make an alternative medicine for Corona Virus

// But, all these chemical compounds have different reactive power, and for the vaccine to be effective, two chemical compounds need to be mixed such that the sum of total reactivity of the two compounds is equal toK.

// The compounds are kept strictly increasing order of their reactivity. You have to find out if there are two compounds whose combine reactivity is equal toKor not

// Sample Input 1 

// 2
// 5 7
// 1 2 3 4 5
// 5 12
// 1 2 3 4 5
// Sample Output 1

// Possible
// Impossible

function medicineOfLife(N,K,arr){


    var flag=false
    for(var i=0;i<N;i++)
    {
        for(j=0;j<N;j++)
        {
            if((arr[i]+arr[j]==K) && i!=j)
            {
                flag = true
            }
        }
    }
    if(flag==true)
    {
        console.log("Possible")
    }
    else{
        console.log("Impossible")
    }
    
    // var sum=0;
    // var left=0;
    // var flag=false;
    // var right=N-1;
    // while(left<right)
    
    // {
    //     sum=arr[left]+arr[right]
    //     if(sum==K)
    //     {
    //         falg=true
    //     }
    //     else if(sum<K)
    //     {
    //         left++
    //     }
    //     else{
    //         right--
    //     }
    // }
    // if(flag==true)
    // {
    //     console.log("Possible")
    // }
    // else{
    //     console.log("Impossible")
    // }
 }
