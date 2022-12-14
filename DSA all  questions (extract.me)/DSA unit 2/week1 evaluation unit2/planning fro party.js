// Description
// Jim and Pam are inviting friends for a party. But, they want to invite only those friends who have helped them in any way. So, they have made two arrays, indicating the number of people they have taken help from. Each person, has been assigned a unique ID, in the form of a number.
// Both, Jim and Pam make their separate invite listAandBbased on the number of people, they have taken help from. Find out if the lists created by the two of them are same or not.
// Note: A person might have helped them multiple times, and obviously would be invited only once

// Sample Input 1 

// 6
// 1 2 2 3 4 5
// 6
// 1 2 3 4 5 5
// Sample Output 1

// Yes
// Sample Input 2 

// 5
// 1 2 2 3 4 
// 6
// 1 2 3 4 5 5
// Sample Output 2

// No

var objp={}
var objj={}

for(var i=0;i<N;i++)
{
    if(objp[PamID[i]]===undefined)
    {
        objp[PamID[i]]=1
    }
    else{
        objp[PamID[i]]=objp[PamID[i]]+1
    }
}
for(var j=0;j<M;j++)
{
    if(objj[JimID[j]]===undefined)
    {
        objj[JimID[j]]=1
    }
    else{
        objj[JimID[j]]=objj[JimID[j]]+1
    }
}
// console.log(objp,objj)
var arr1=Object.keys(objp)
var arr2=Object.keys(objj)
var count=0;
for(var i=0;i<arr1.length;i++)
{
    for(var j=0;j<arr2.length;j++)
    {
        if(arr1[i]==arr2[j])
        {
            count++
        }
    }
}
if(count==arr1.length && count==arr2.length)
{
      console.log("Yes")
}
else{
    console.log("No")
}