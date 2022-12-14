// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// 24
// Hint

// In the sample test case, the value stored inN = 4, andarr = [1 2 3 4]

// Therefore, the value ofx = 2 + 4 = 6, and the value ofy = 1 + 3 = 4

// Therefore, the value of the given equation =x*y = 6*4 = 24, which is the required answer

var esum=0;
var osum=0;
      for(var i=0;i<N;i++)
      {
          if(arr[i]%2==0)
          {
              esum=esum+arr[i];
          }
      }
      for(var j=0;j<N;j++)
      {
          if(arr[j]%2==1)
          {
              osum=osum+arr[j];
          }
      }
      console.log(esum*osum);