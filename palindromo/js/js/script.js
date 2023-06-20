
let userWord = prompt("Prego inserire una stringa");

while(typeof userWord ==! "string" && userWord.length > 1){
    userWord = prompt("La parola inserita non è una stringa. Riprovare");
}

function checkPalindrome(word){
    //convertire stringa in array
    let arrayString = word.split("");

    //Inverti i valori dell'array
    let reversedArrayString = arrayString.reverse();

    //riconvertire l'array swappato in stringa
    let reversedString = reversedArrayString.join("");

    if(word === reversedString){
        console.log("Stringa Palindroma");
        return true;
    }
    else{
        console.log("Stringa non Palindroma");
        return false;
    }
}

let value = checkPalindrome(userWord);
console.log(value);