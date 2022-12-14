//print odd place elements

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