let firstCard = 1
let secondCard = 7
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true
let message 
let messageEl = document.getElementById("message-el")

// 1. Declare a variable called message and assign its value to an empty string
function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}