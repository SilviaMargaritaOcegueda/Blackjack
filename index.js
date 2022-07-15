let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function renderGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
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
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`
}

function startGame() {
    renderGame()
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let newCard = 2
    cards.push(newCard)
    sum += newCard
    renderGame()
    for (let i = 2; i < cards.length; i++) {
        cardsEl.textContent += (" " + cards[i])

    }
}