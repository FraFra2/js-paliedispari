
let userWord = prompt("Prego inserire una stringa");

let myDiv = document.createElement("div");
let myH1 = document.createElement("h1");


myDiv.classList.add("container", "mx-auto", "text-center", "my-5");


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
        myH1.innerHTML = "Stringa Palindroma";
        return true;
    }
    else{
        myH1.innerHTML = "Stringa non Palindroma";
        return false;
    }
}

let value = checkPalindrome(userWord);

myDiv.append(myH1);
document.body.append(myDiv);