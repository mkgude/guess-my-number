'use strict';

let score = 20
const num = Math.trunc(Math.random()*20)+1;

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess)
    if (!guess){
        document.querySelector(".message").textContent = "🥴 Please enter a number!"
    } else if (guess === num){
        document.querySelector(".message").textContent = "🤗 You guessed correctly!"
        document.querySelector(".number").textContent = num
        document.querySelector("body").style.backgroundColor= "#60b347"
        document.querySelector(".number").style.width = "30rem"
    } else if (guess > num) {
        if (score > 1) {
            document.querySelector(".message").textContent = "😲 Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lost the game"   
            document.querySelector(".score").textContent = 0
        }
    } else {
        if (score > 1) {
            document.querySelector(".message").textContent = "😲 Too low!"
            score--;
            document.querySelector(".score").textContent = score
        } else {
            document.querySelector(".message").textContent = "You lost the game"   
            document.querySelector(".score").textContent = 0
        }
    }
})

