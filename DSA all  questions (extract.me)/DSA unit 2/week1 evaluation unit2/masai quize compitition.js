// Masai School is organizing a quiz competition, but it wants only those people to participate, who are willing. Therefore, it is not mandatory to participate for everyone
// Also, students can form groups of any sizes to participate in the competition.
// All the students are standing in a queue, and are holding cards with values on them either 0 or 1. 1 indicates a student is participating, while 0 indicates that a student is not participating. All the students that are standing together, and are participating, that means holding a card with a value 1, are in the same team.
// You have to find the number of groups participating in the quiz
// Note: It is possible that all the students fall in one single group

// Sample Input 1 

// 2
// 5
// 1 1 0 1 1
// 4
// 1 1 1 1
// Sample Output 1

// 2
// 1
// oj link: https://oj.masaischool.com/contest/3247/problem/01
var count=0;
   for(var i=0;i<n;i++)
   {
       if(arr[i]==1 && arr[i+1]==0)  //if 0 comes after the 1 then a team form so accordinly we check
       {
         count++
       }
   }
  if(arr[n-1]==1)          //if last element of array contains 1 then in output we need to add 1 becz
  {                            //if there is zero before last element it will form one team
      console.log(count+1)
  }
  else{
      console.log(count)
  }


  //or sec approach using blank array
  var arr1=[];
var count=0;
for(var i=0;i<n;i++)
{
    if(arr1[arr1.length-1]!==arr[i])  //we are checking whether last element in arr1 is
    {                               //is eual to arr[i] or not if not equal then we push
        arr1.push(arr[i])           //that element into arr1. so we will have only single
    }                             //elements according to 1 and 0
}
for(var i=0;i<arr1.length;i++)
{
    if(arr1[i]==1)
    {
        count++
    }
}
console.log(count)