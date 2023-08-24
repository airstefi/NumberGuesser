const promt = require("prompt-sync")();

const target = Math.round(Math.random()*100);

let guesses = 0;

while (true)
{
    guesses++;

    const guess = Number(promt("Guess the number between 1-100 "));

    if (target > guess)
    {
        console.log("Guess is too low");
        continue
    }

    else if(target<guess)
    {
        console.log("Guess is too high");
        continue
    }

    console.log("You guessed it!");
    break

}

console.log("It took you", guesses, "tries")


