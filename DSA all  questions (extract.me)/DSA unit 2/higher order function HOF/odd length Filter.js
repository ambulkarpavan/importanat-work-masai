// ARRAY ODD LENGTH STRINGS SUM
// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8

var input=["A", "Good", "Problem"]

var output=input.filter(function(ele,i,arr)
                    {
                      if(i%2==0)
                      {
                        return ele
                      }
                    }).reduce(function(sum,ele,i,arr)
                                  {
                                  return  sum+ele.length
                                  },0)


console.log(output)