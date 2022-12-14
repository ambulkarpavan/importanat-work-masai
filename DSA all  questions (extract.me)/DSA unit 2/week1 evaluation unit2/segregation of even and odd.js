 //You are given an array, of sizeN
// You have to divide the array into two parts,evenandodd, such that all the even elements in the array are present in theeven, while all the odd parts in the array are present in theoddpart
// You are given another integerq, which has a value of either1or2
// If the value ofq == 1, print all the even elements in the array followed by all the odd elements in the array, otherwise print all the odd elements in the array followed by all the even elements in the array
// Note : The relative order of odd and even elements among themselves should be the same as in the original array


// Sample Input 1 

// 2
// 5
// 1 2 3 4 5
// 1
// 5
// 1 2 3 4 5
// 2
// Sample Output 1

// 2 4 1 3 5
// 1 3 5 2 4

var ebag=""
var obag=""
for(var i=0;i<N;i++)
{
  if(arr[i]%2==0)
  {
      ebag=ebag+arr[i]+" "
  }
  else{
      obag=obag+arr[i]+" "
  }
}

if(Q%2==0)
{
   console.log(obag+ebag)
}
else{
   console.log(ebag+obag)
}