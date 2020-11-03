const displayMessage = function(message){
    document.querySelector(".message").textContent = message
}

let score = 20
let num = Math.trunc(Math.random()*20)+1;
let highscore = 0

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess)
    if (!guess){
        displayMessage("🥴 Please enter a number!")
    } else if (guess === num){
        displayMessage("🤗 You guessed correctly!");
        document.querySelector(".number").textContent = num
        document.querySelector("body").style.backgroundColor= "#60b347"
        document.querySelector(".number").style.width = "30rem"
        if (score > highscore) {
            highscore = score
            document.querySelector(".highscore").textContent = score
        }

    } else if (guess !== num) {
        if (score > 1) {
            // document.querySelector(".message").textContent = guess > num ? "😲 Too high!" : "😲 Too low!";
            score--;
            displayMessage(guess > num ? "😲 Too high!" : "😲 Too low!")
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You lost the game") 
            document.querySelector(".score").textContent = 0
        }
    } 
})

document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    num = Math.trunc(Math.random()*20)+1;
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent="?"
    document.querySelector(".guess").value = ""
    
    document.querySelector("body").style.backgroundColor= "#222"
    document.querySelector(".number").style.width = "15rem"
})

