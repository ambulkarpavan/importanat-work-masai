// Sample Input 1 
// 4
// 1 2 3 4
// Sample Output 1
// 148
// Hint
// In the sample test case, he value stored inN = 4, andarr = [1 2 3 4]
// Therefore, the value ofx = 1*2*3*4 = 24, and the value ofy = 1 + 2 + 3 + 4 = 10
// Therefore, the value of the given equation =2*x + 10*y = 2*24 + 10*10 = 48 + 100 = 148, which is the required answer

var x=1;
  var y=0;
  for(var i=0;i<N;i++)
  {
      x=x*arr[i];
      y=y+arr[i]
  }
  console.log((2*x)+(10*y))