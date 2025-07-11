const prompt = require("prompt-sync")();

function playGuessingGame() {
    const max = prompt("🎯 Enter the maximum number: ");
    const random = Math.floor(Math.random() * Number(max)) + 1;

    let guess = prompt("🤔 Guess the number (or type 'quit' to exit): ");

    while (true) {
        if (guess.toLowerCase() === "quit") {
            console.log("👋 User quit the game.");
            break;
        }

        const guessNum = Number(guess);

        if (isNaN(guessNum)) {
            guess = prompt("⚠️ Invalid input. Please enter a number: ");
            continue;
        }

        if (guessNum === random) {
            console.log("🎉 You are right! Congrats!! The number was", random);
            break;
        } else if (guessNum < random) {
            guess = prompt("📉 Too small! Try again: ");
        } else {
            guess = prompt("📈 Too large! Try again: ");
        }
    }
}

playGuessingGame();
