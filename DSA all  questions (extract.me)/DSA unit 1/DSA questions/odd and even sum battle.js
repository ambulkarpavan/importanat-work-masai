var esum=0;
var osum=0;
 
 for(var i = 0 ; i < arr[i]; i++)
 {
     if(arr[i] % 2 === 0 ){
       esum = esum + arr[i];       
     }
     else{
         osum = osum + arr[i];
     }
 }

if(osum > esum)
{
    console.log("Odd");
}
else{
    console.log("Even");
}