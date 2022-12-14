// You have a terrible toothache, so you went to book an appointment to see your doctor. When you reach there you notice that there are no seats and everyone's standing.
// The doctor's assistant is pretty strict, so she doesn't allow anyone inside the cabin until it's his turn. People are standing in a random order so she passes each person to check if he's next, when she finds the one she takes him with her. Meanwhile, nobody is allowed to exchange places, when she comes back she repeats the process from the front of the line. She takes one move to move from one person to another. You have to find the total number of moves she used to completely clear the queue.

// Note-when she finds the person and takes him with her during that no move is counted

// Sample Input 1 

// 4
// 1 2 3 4
// 4 2 3 1
// Sample Output 1

// 8

function  appoinment(list,row,N)
{
   // console.log(list,row,N)
    var count= 0;
    for(var i=0;i<N;i++)
    {
        count = count+1
        for(j=0;j<N;j++)
        {
            if(list[i] != row[j])
            {
                count++
            }
            else{
          row.splice(j,1)   
            
            // console.log(row)
             break
                   
            }
          
        }
          
    }
    console.log(count-1)
}