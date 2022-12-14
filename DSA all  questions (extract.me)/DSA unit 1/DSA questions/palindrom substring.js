// You are provided a stringS.

// // Write a program that returns length of the longest palindromic substring of that string.

function masaiPalSubString(S){
    //write code here
   function checkPalindrome(S) {
      var rev = "";
      for (var i = S.length - 1; i >= 0; i--) 
      {
          rev = rev + S[i];
      }
      if (rev == S) 
      {
          return true;
      }
      else 
      {
          return false;
      }
  }

  var len = S.length;
  var max = 1;

  for (var i = 0; i < len ; i++) {

      var bag = "";

      for (var j = i; j < len; j++) {

          bag = bag + S[j];  //gives no of substrings.
                            //console.log(bag);
  
          if (checkPalindrome(bag) === true && bag.length > max) {
              max = bag.length;
          }
      }
  }
  console.log(max);
}
masaiPalSubString("thisracecarisgood")

        
  
           