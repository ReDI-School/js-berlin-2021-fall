// secret points to a random number between 1 and 100
let secret = Math.floor(Math.random() * 100) + 1;

function guess() {
    let guess = document.getElementById("guess").valueAsNumber;
    let response = checkGuess(guess, secret);

    document.getElementById("result").textContent = response;
}

function checkGuess(guess, secret) {
    return "TODO!!!"
}
