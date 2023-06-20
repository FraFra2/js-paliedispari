// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
function getRandomNum() {
    return Math.floor(Math.random() * 5) + 1;
  }

function sum(x, y){
    return x + y;
}

function checkOddEven(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

let userInput = document.getElementById("userNum");
let cpuOutput = document.getElementById("cpuNum");
let results = document.getElementById("resultsP");
let buttonGame = document.querySelector("button");

buttonGame.addEventListener("click", function(){
    let selectedValue = document.getElementById("oddEvenSel").value;
    if(userInput.value > 5){
        alert("Il numero deve essere inferiore o uguale a 5");
        userInput.value = 0;
    }
    cpuOutput.value = getRandomNum();
    let resultValue = sum(parseInt(userInput.value), parseInt(cpuOutput.value));
    let resultOutpu = document.querySelector("h3").innerHTML = resultValue;
    let sumCheck = checkOddEven(resultValue);
    if(sumCheck == selectedValue){
        results.innerHTML = "Il giocatore ha vinto."
    }
    else{
        results.innerHTML = "Il giocatore ha perso."
    }
});







