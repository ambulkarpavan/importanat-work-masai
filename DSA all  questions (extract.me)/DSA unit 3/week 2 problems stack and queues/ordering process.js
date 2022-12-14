// You are the operations manager of Masai School, and N number of processes have to be executed by you.All the processes have a unique number assigned to them from1 to N.

// You are given two arrays :

// The first array denotes the calling order, in which the processes are being started.
// The second array denotes theidealorder in which all the processes should have been executed.


// Note : Executing a process, or changing the position takes 1 unit of time.

// Sample Input 1 

// 3
// 3 2 1
// 1 3 2
// Sample Output 1

// 5

function orderingProcess(N,calling,ideal)
{

   let count =0;
   while(calling.length>0)
   {
       
       if(calling[0] == ideal[0])
       {
           calling.shift()
           ideal.shift()
           
       }
       else{
           let x = calling[0]
           
           calling.shift()
           
           calling.push(x)
       }
     //  console.log(calling.length)
       count++
   }
   
console.log(count)

} 