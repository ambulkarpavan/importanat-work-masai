
// Sample Input 2 

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 5
// Sample Output 2

// 1 5 9
// 3 5 7

var bag="";
    for(var i = 0; i < R; i++){
      for(var j = 0; j < C; j++){
          if(  diff == i-j){
             bag=bag+matrix[i][j]+" ";
              
          }
      }
  }
  console.log(bag);
  
  
  var sack="";
  for(var i = 0; i < R; i++){
      for(var j = 0; j < C; j++){
          if( i + j == sum){
              sack=sack+matrix[i][j]+" ";
              
          }
      }
  }
    console.log(sack);