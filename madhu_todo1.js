let containerElement = document.getElementById("speedTypingTest");
let timerElement = document.getElementById("timer");
let quoteElement = document.getElementById("quoteDisplay");
let resultElement = document.getElementById("result");
let textareaElement = document.getElementById("quoteInput");
let submitElement = document.getElementById("submitBtn");
let resetElement = document.getElementById("resetBtn");
let spinnerElement = document.getElementById("spinner");

let counter = 0;
spinnerElement.classList.toggle("d-none");

function startCounting() {

    counter += 1;
    timerElement.textContent = counter;
    console.log(counter);
}
let counterValue = setInterval(startCounting, 1000);

function addqoute() {
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerElement.classList.add("d-none");
            let quote = jsonData.content;
            quoteElement.textContent = quote;
            console.log(jsonData.content);
        })
}
startCounting()
addqoute()

resetElement.onclick = function() {
    spinnerElement.classList.remove("d-none");
    quoteElement.textContent = "";
    counter = 0;
    textareaElement.textContent = "";
    startCounting()
    addqoute()
}
submitElement.onclick = function() {
    if (quoteElement.textContent === textareaElement.value) {
        clearInterval(counterValue);
        resultElement.textContent = "you typed in" + counter + "seconds";

    } else {
        resultElement.textContent = "you typed incorrect sentence";
    }
};