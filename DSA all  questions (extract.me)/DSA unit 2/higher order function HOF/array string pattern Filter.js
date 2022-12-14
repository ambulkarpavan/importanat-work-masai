// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

var Input = ["assignment", "problem", "media", "upload"]

var output=Input.filter(function(ele,i,arr)
                        {
                          if(ele[0]=="a"||ele[ele.length-1]=="a")
                          {
                            return ele
                          }
                        })
console.log(output)