let firstCard = Math.floor(Math.random() * 10) + 1
let secondCard = Math.floor(Math.random() * 10) + 1

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

console.log(sum)

function checkBlackJack ()
{
    if (sum <= 20)
    {

    }

    else if (sum === 21)
    {
        hasBlackJack = true
    }

    else
    {
        isAlive = false
    }
}

function startGame() 
{
    console.log(1)
}