// Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)


var input=[1, 2, 3, 4, 5, 6];

var output=input.filter(function(ele,i,arr)
                        {
                          return ele%3==0
                        })
output=output.reduce(function(sum,ele,i,arr)
                     {
                       return sum+ele**3
                     },0)
console.log(output)