let cards = Array()
let sum = 0

let hasBlackJack = false
let isAlive = true

let cardsP = document.getElementById("cards-el")
let sumP = document.getElementById("sum-el")
let messageP = document.getElementById("message-el")
let newCardButton = document.getElementById("buttonNewCard")
let message = ""
let cardsMessage = ""

function generateCard ()
{
    return (Math.floor(Math.random() * 10) + 2)
}

function addCard ()
{
    cards.push(generateCard())
    updateGame ()
}

function disableAddCardButton (disable)
{
    newCardButton.disabled = disable

    if(disable)
    {
        newCardButton.style.backgroundColor = "grey"
    }

    else
    {
        newCardButton.style.backgroundColor = "goldenrod"
    }
}

function updateSum (card)
{
    sum += card
}

function printCards (card)
{
    cardsMessage += card + " "
}

function checkBlackJack ()
{
    cardsMessage = ""
    sum = 0
    cards.forEach(printCards);
    cards.forEach(updateSum);

    if (sum <= 20)
    {
        message = "Do you want to draw a new card?"
    }

    else if (sum === 21)
    {
        message = "You've got Blackjack!"
        hasBlackJack = true
        disableAddCardButton(true)
    }

    else
    {
        message = "You're out of the game!"
        isAlive = false
        disableAddCardButton(true)
    }
}

function updateUI ()
{
    messageP.textContent = message
    cardsP.textContent = "Cards: " + cardsMessage
    sumP.textContent = "Sum: " + sum
}

function updateGame ()
{
    checkBlackJack()
    updateUI()
}

function startGame() 
{
    cards = Array()
    addCard()
    updateGame ()
    disableAddCardButton(false)    
}