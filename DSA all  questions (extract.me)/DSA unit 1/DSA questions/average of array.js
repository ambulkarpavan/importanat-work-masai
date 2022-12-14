var sum=0;
for(var i =0; i<arr.length;i++)
{
    sum=sum+arr[i];
}

var avg=sum/arr.length;
console.log(Math.ceil(avg));