// Description

// You are very good at playing chess since childhood and you knew the rules very much. You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

// You can refer the following diagram, the knight can move to any of the squares marked as X in 1 move.
// Sample Input 1 

// 3 3 1
// Sample Output 1

// 8

function  knightMove(arr)
{
    //console.log(arr)
   var x = arr[0]-1
   var y = arr[1]-1
   var N = arr[2]
   
    let Grid = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
        ]
   
   
   //     let Grid = new Array(10).fill(0).map(function(ele)
//    {
//     return new Array(10).fill(0);
// })
     
        function Moves(x,y,N)
        {
            
            if(x<0 || y<0 || x>9 || y>9)
            {
                return 
            }
            if(N===0)
            {
                Grid[x][y] = 1
                return  
            }
            
            Moves(x-2,y-1,N-1)
            Moves(x-2,y+1,N-1)
            Moves(x-1,y-2,N-1)
            Moves(x-1,y+2,N-1)
            Moves(x+1,y-2,N-1)
            Moves(x+1,y+2,N-1)
            Moves(x+2,y-1,N-1)
            Moves(x+2,y+1,N-1)
        }
        
        
        Moves(x,y,N)
        
       // console.log(Grid)
       
        let count =0;
        for(var i=0;i<10;i++)
        {
            for(var j=0;j<10;j++)
            {
                if(Grid[i][j] === 1)
                {
                    count++
                }
            }
        }
        console.log(count)
}