// Sample Input 1 

// 5
// 1 2 3 6 4
// Sample Output 1

// 1 2 4



var sack = "";

for (var i = 0; i < size; i++) {

    if (array[i] % 3 !== 0) {

        sack = sack + array[i] + " ";
    }
}

if(sack.length === 0){
    console.log(0);

} else {
    console.log(sack);
}