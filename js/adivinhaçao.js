let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").innerHTML = "";
    document.getElementById("resetButton").style.display = "none";
}

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    const messageDiv = document.getElementById("message");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageDiv.innerHTML = "Por favor, digite um número entre 1 e 100.";
        return;
    }

    attempts++;

    if (guess === secretNumber) {
        messageDiv.innerHTML = `Parabéns! Você acertou o número em ${attempts} tentativas.`;
        document.getElementById("resetButton").style.display = "block";
    } else if (guess < secretNumber) {
        messageDiv.innerHTML = "Tente um número maior.";
    } else {
        messageDiv.innerHTML = "Tente um número menor.";
    }
}

function resetGame() {
    document.getElementById("guess").value = "";
    startGame();
}

startGame();