var bag="";
for(var i = (num.length-1);i>=0;i--)
{
    bag= bag + num[i];
}

if(bag == num)
{
    console.log("Yes");
}
else
{
    console.log("No");
}