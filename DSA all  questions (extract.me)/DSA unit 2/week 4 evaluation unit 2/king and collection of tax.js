// // The King of Somerville, is a noble king, and is considerate about his citizens. After the recent survey, he found out that the amount of tax paying citizens in his kingdom is 2N. So, he decides to impose a new rule on his kingdom for the collection of taxes. He decides that all the people will be divided into groups of 2 each, and the tax collected from each group will be equal to the maximum of the tax amount of the two members. To take care of his poor citizens, he decides a strategy. At every iteration, the citizen which has the minimum tax amount, and is not part of any other group is paired with the citizen, which has the maximum tax amount, and is not part of any other group.

// // You are given an array of size 2N, and the elements of the array denote the tax amount of the citizens. Find out the tax collected if the citizens are divided into groups using the above strategy.
// // Sample Input 1 

// // 2
// // 1 3 1 2
// // Sample Output 1

// // 5

// Sample Input 1 

// 2
// 1 3 1 2
// Sample Output 1

// 5

function  collectionOfTax(N,arr)
{
   
 arr=arr.sort(function(a,b)   //here i have sorted it it will take all higher number one side
 {                            //then we are just taking sum of all higher number from middle
     return a-b
 })
//console.log(arr)

   var length=arr.length/2
   var bag=0
   for(var i=length;i<arr.length;i++)
   {
       bag=bag+arr[i]
   }
   console.log(bag)
}