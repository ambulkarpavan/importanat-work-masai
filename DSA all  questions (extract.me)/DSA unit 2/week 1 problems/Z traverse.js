// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 2 3 5 7 8 9 


    var bag="";
    
    if(arr.length>1){
        
    for(var j=0;j<N;j++)
    {
        bag=bag+arr[0][j]+" "
    }
  
 for(var j=(N-2);j>0;j--)
 {
     bag=bag+arr[N-j-1][j]+" "
 }
  
  for(var j=0;j<N;j++)
  {
      bag=bag+arr[N-1][j]+" "
  }
  console.log(bag)
    }
    
    
    else
    {
        console.log(arr[0][0])
    }