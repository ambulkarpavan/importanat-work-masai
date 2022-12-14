// Its the year 1940, and the British along with the Allied forces, are being brutally assaulted on the battle field, by Hitler's Nazi Germany. The Britishers need to crack the secret communication that takes place between the German troops, with the help of their encryption device "Enigma". Alan Turing, the famous Mathematician, is assigned the task, to break the German encryption code, with his computer device "Christopher".

// The communication happens in the form of strings, and the strings are organized such that, given a string "S", when fed into a text editor "#" means backspace, on a conventional keyboard. Since, everyday, Britain is getting more behind in the war, Alan asks for your help. Help Alan, break the secret communication between German Troops.

// Note that after backspacing an empty text, the text will continue empty.

// Sample Input 1 

// 2
// ab#d
// a#bc
// Sample Output 1

// ad
// bc

function  alanAndChristopher(str)
{
  str=str.trim().split("")
   // console.log(str)
    var bag=[]
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=="#")
        {
            bag.pop()
        }
        else{
            bag.push(str[i])
        }
    }
    console.log(bag.join(""))
}