const url=`https://reqres.in/api/users?page=2`;


fetch(url)
.then(function(res){
    return res.json();

})
.then(function(res){
    appenddata(res.data)
})
.catch(function(err){
    console.log("err",err);
})

function appenddata(data){
    data.forE
}