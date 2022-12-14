//calculate the product of all elements except the element at a perticular place

var arr=[1,2,3,4,5]
var arr1=[]

// for(var i=0;i<arr.length;i++)  //using brute force appproach time complexity is T=O((N*N)  and extra space is 1 i.e arr1
// {
//     var prod=1
//     for(var j=i+1;j<arr.length;j++)
//     {
//         prod=prod*arr[j]
      
//     }
//    // console.log(prod)
//     arr1.push(prod)
// }
// console.log(arr1)

//using extra space method we can reduce time complexity as time is superior than space

var arr=[1,2,3,4,5]
var n=arr.length
var left=[]

left[0]=1
var prod=1
for(var i=1;i<arr.length;i++)
{
    prod=prod*arr[i-1]
    left[i]=prod
   // console.log(prod)
}
//console.log(left)

var right=[]
right[n-1]=1
var prod=1
for(var j=(n-2);j>=0;j--)
{
prod=prod*arr[j+1]
right[j]=prod
//console.log(prod)
}
//console.log(right)

var ans=[]
for(var k=0;k<left.length;k++)   //now the time complexity is T=O(N) ans space complexity is 2N
{ 
    ans[k]=left[k]*right[k]
}
console.log(ans)