// Given N strings , Pasha needs to group anagrams together.
// Output
// output an integer N and N strings which need to be together for every group. Repeat this for every test case.


// Sample Input 1 

// 2
// 6
// eat
// tea
// tan
// ate
// nat
// bat
// 3
// abc
// abc
// def
// Sample Output 1

// 3
// ate
// eat
// tea
// 1
// bat
// 2
// nat
// tan
// 2
// abc
// abc
// 1
// def


function groupsAngaram(N,arr)
 {
   var arr1=[]
   for(var i=0;i<arr.length;i++)
   {
     arr1.push(arr[i].split("").sort().join(""))   //we create a dummpy arr1 which has sorted str char
       
   }
   
for(var j=0;j<arr1.length;j++)
{
    for(var k=0;k<arr1.length;k++)
    {
        if(arr1[k]>arr1[k+1])
        {
            swap(arr1,k,k+1,arr)    //using bubble sort we are sorting alphabetically each str and also swap in original arr
        }
    }
}
// console.log(arr1,arr)
function swap(arr1,i,j,arr)
{
    var temp=arr1[i]
    arr1[i]=arr1[j]
    arr1[j]=temp
    
     var temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    
    return arr,arr1
}
     
  var obj={}
  
  for(var i=0;i<arr1.length;i++)   //we are creating obj using arr1,arr which gives us angaram str
  {
      if(obj[arr1[i]]==undefined)
      {
          obj[arr1[i]]=[arr[i]]
      }
      else{
         obj[arr1[i]].push(arr[i])
      }
  }
   // console.log(obj)
    
    for(var key in obj)  // we are printing angaram and nonanag according to condition given
    {
        console.log(obj[key].length)
        // console.log(obj[key])
         for(var i=0;i<obj[key].length;i++)
         {
             console.log(obj[key][i])
         }
    }
 }