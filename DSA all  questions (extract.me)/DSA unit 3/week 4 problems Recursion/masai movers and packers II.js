// You are excited about your new job and want to move to Bangalore, as soon as possible. You have to transport K units of weight of your stuff to Bangalore, therefore, you hired Masai Packers & Movers to do the job for you. The company has N trucks, each with a certain capacity C. Because of surge in fuel prices, the company has made a new policy that the trucks will be allowed to travelled, only if the truck is completely filled and has no empty spaces. Also, because of some issues, the company has only one driver. Therefore, in one day only a single truck can be used, to transport the things to Bangalore. Print the minimum and the maximum number of days, it will take to transport everything to Bangalore. If it is impossible to transport everything to Bangalore, print -1.

// Sample Input 1 

// 3 3
// 1 2 3
// Sample Output 1

// 1 3
// Sample Input 2 

// 39 3
// 8 10 2
// Sample Output 2

// -1

function   masaiPackerII(K,N,arr)
 {
       var count =0;
       var ans = []
    function recursion(K,count,arr)
    {   
        if(K == 0)
        {
            ans.push(count)
            count=0
            return 
        }
        if(K<0)
        {
            return 
        }
       for(let i=0;i<N;i++)
       {
           
           recursion(K-arr[i],count+1,arr)
       }
      
    }
            recursion(K,count,arr)
            ans = ans.sort()
              
            if(ans.length<1)
            {
                console.log(-1)
            }
            else{
                console.log(ans[0]+" "+ans[ans.length-1])
            }
            
 }
         