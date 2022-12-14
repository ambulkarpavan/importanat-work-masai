// You are given a sorted arrayAof sizeN, and another integerK
// You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
// If such a pair exists, printYes, else printNo

// Sample Input 1 

// 2
// 5 3
// 1 2 3 4 5
// 5 8
// 1 2 3 4 5 
// Sample Output 1

// Yes
// No

function findcommonsumpair(N,K,arr){
    var p1=0;
    var p2=0;
    var diff=0
    while(p1<=N-1 && p2<=N-1)
    {
       
        diff=arr[p1]-arr[p2]
       
        //console.log(diff,arr[right],arr[left])
        if(diff==K && p1 !== p2)
        {
            
            return "Yes"
            break;
        }
        else if(diff<K)
        {
            p1++
            
        }
        else
        {//console.log(p2)
           p2++
            
        }
        
     
    }
    return "No"
}