// There is a coding Tournament where 4 clubs are going to compete. Since the team selection is very critical in this competition,Rohit asked Harshit to help him in the team selection process.

// There is a long queue of students from four clubs. Each student of a club have a different roll number. Whenever a new student will come, he will search for his clubmate from the end of the queue. As soon as he will find any of the club-mate in the queue, he will stand behind him, otherwise he will stand at the end of the queue. At any moment Harshit will ask the student, who is standing in front of the queue, to come and give his name and Harshit will remove him from the queue. There are Q operations of one of the following types:

// E a b: A new student of club a whose roll number is b will stand in queue according to the method mentioned above.

// D: Harshit will ask the student, who is standing in front of the queue, to come and put his name and Harshit will remove him from the queue

// Sample Input 1 

// 5
// E 1 1
// E 2 1
// E 1 2
// D
// D
// Sample Output 1

// 1 1
// 1 2

function masaiCodingCompitition(arr,q1,q2,q3,q4,flag1,flag2,flag3,flag4,mainQue)
{
    
    
    function enqueue(que,mainQue,flag,club,rollNo)
    {
        if(que.length>0)
        {
            flag = true
        }
        if(flag === false)
        {
            mainQue.push(+club)
        }
        que.push(+rollNo)
    }
    function dequeue(que,mainQue,flag)
    {
        console.log(mainQue[0],que[0])
        que.shift()
        if(que.length === 0)
        {
            flag = false
            mainQue.shift()
        }
    }
  
 
       if(arr[0] === "E")
       {
           if(arr[1] == 1)
           {
               enqueue(q1,mainQue,flag1,arr[1],arr[2])
           }
           else if(arr[1] == 2)
           {
               enqueue(q2,mainQue,flag2,arr[1],arr[2])
           }
            if(arr[1] == 3)
           {
               enqueue(q3,mainQue,flag3,arr[1],arr[2])
           }
            if(arr[1] == 4)
           {
               enqueue(q4,mainQue,flag4,arr[1],arr[2])
           }
           
       }
       else if(arr[0] === "D")
       {
           if(mainQue[0] == 1)
           {
               dequeue(q1,mainQue,flag1)
           }
            else if(mainQue[0] == 2)
           {
               dequeue(q2,mainQue,flag2)
           }
            else if(mainQue[0] == 3)
           {
               dequeue(q3,mainQue,flag3)
           }
           else  if(mainQue[0] == 4)
           {
               dequeue(q4,mainQue,flag4)
           }
           
       }
    }