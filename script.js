'use strict';
// console.log(document.querySelector(".message").textContent)
// document.querySelector(".message").textContent = "Correct Number 🙌 !"

// let score = 20
const num = Math.trunc(Math.random()*20)+1;
document.querySelector(".number").textContent = num

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess)
    if (!guess){
        document.querySelector(".message").textContent = "🥴 Please enter a number!"
    } else if (guess === num){
        document.querySelector(".message").textContent = "🤗 You guessed correctly!"
    } else if (guess > num) {
        document.querySelector(".message").textContent = "😲 Too high, try again!"
    } else {
        document.querySelector(".message").textContent = "😲 Too low, try again!"
    }
})

