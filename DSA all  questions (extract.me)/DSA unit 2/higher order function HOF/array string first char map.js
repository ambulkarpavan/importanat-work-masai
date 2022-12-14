// Given an array of string generate an array with their first characters

// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]

var Input = ["Masai", "School"]


var output=Input.map(function(ele,i,arr)
                         {
                           return ele[0]
                         })
console.log(output)