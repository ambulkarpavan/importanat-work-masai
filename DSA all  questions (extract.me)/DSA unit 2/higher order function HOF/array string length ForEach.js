// Given an array of strings print the length of each string

// example : ["apple", "windows", "ubuntu"]

var input=["apple", "windows", "ubuntu"]
var output=input.forEach(function(ele,i,arr)
                         {
                           console.log(ele.length)
                         })