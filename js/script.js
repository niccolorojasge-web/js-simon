// seleziono tutti i campi
const timer = document.getElementById("countdown");
const numbersList = document.getElementById("numbers-list");
const buttonConfirm = document.querySelector("btn-primary");
const messageDanger = document.querySelector("text-danger");
const selectionNumber = document.getElementById("answers-form");

//far visualizzare al utente 5 numeri casuali
let = Result;

for (i = 0, let, i < 5, i++) {
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }
}
console.log(getRandomIntInclusive(0, 50));

numbersList.innerText = getRandomIntInclusive(0, 50);
numbersList.innerText = Result

//fai partire un timer di 30 secondi 

let seconds = 10;

timer.innerText = seconds;

const tims = setInterval(() => {
    if (seconds === 0) {
        clearInterval(tims)
    } else {
        seconds = seconds - 1;
        timer.innerText = seconds
    }
}, 1000)






//far apparire 5 input in cui l utente deve inserire i 5 numeri 




//software che dice quanti e quali numeri ha ricordato
