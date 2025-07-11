// const favMovie = "Avtar";
// let guess = prompt("Can you guess my favourite movie ?");

// while(guess != favMovie && guess != "quit"){
//     guess = prompt("Wrong Guess Yarr, Pls. Try Again !");
// }
// if(guess == favMovie){
//     console.log("Congrats. This is My Favourite Movie, You Win Yarr...")
// }
// else{
//     console.log("uppp, you quit !")
// }

const favMovie = "Avtar";
let guess = prompt("Can you guess my favourite movie?");

while (guess.toLowerCase() !== favMovie.toLowerCase() && guess.toLowerCase() !== "quit") {
    guess = prompt("Wrong Guess, Yarr! Please try again...");
}

if (guess.toLowerCase() === favMovie.toLowerCase()) {
    console.log("Congrats! This is my favourite movie. You win, Yarr!");
} else {
    console.log("Oops, you quit!");
}
