// //In the first sample test case, the number of vowels in the string are 4, which is more than N/2 i.e. 2, therefore the output is "Feel good!".

// In the second sample test case, the number of vowels in the string are 1, which is less than N/2 i.e 2, therefore the output is "Feel bad!".

var count=0;
    for(var i=0;i<N;i++)
    {
        if(string[i]=="a"||string[i]=="e"||string[i]=="i"||string[i]=="o"||string[i]=="u")
        {
            count++
        }
    }
    //console.log(count);
    
    if(count>=N/2)
    {
        console.log("Feel good!");
    }
    else{
        console.log("Feel bad!");
    }