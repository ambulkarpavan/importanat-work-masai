// Finally, India found the vaccine, and things have started getting normal. Offices are opening up, and therefore, you have to shift to Bangalore. Now, to transport your stuff, you hire Masai Packers & Movers. The company has N trucks, and each truck can hold only a certain amount of weight only. Also, because of surge in prices of Fuel, the company has implemented a new policy, that the truck will be granted to the customer, only if the truck is completely occupied, and no extra space is left.

// You have to transport K units of weight, since each truck will take the weight exactly equal to its capacity, find the number of ways, in which you can transport K units of weight.

// Note : Any truck can be sent any number of times.
// Sample Input 1 

// 3 3
// 1 2 3
// Sample Output 1

// 4

function masaiPacker(K,N,arr)
{
 
   var count =0;
    function recursion(K,N)
    {   //console.log(K,N,arr,count)
        if(K == 0)
        {
            count++
            return 
        }
        if(K<0)
        {
            return 
        }
       for(let i=0;i<N;i++)
       {
           recursion(K-arr[i],N)
       }
      
    }
    recursion(K,N)
console.log(count)
}