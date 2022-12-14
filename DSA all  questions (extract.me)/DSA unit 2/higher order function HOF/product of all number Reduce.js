// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4] Sample Output - 24

var Input = [2,3,4]

var output=Input.reduce(function(res,ele,i,arr)
                        {
                          return res*ele
                        },1)

console.log(output)