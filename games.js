// Tüm oyun fonksiyonları burada
// Sayı tahmin oyunu
let targetNumber, attempts;

function initGuessNumberGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessResult').textContent = '';
    document.getElementById('guessAttempts').textContent = 'Deneme: 0';
    document.getElementById('guessInput').value = '';
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const resultElement = document.getElementById('guessResult');
    
    if (isNaN(guess)) {
        resultElement.textContent = 'Lütfen geçerli bir sayı girin!';
        return;
    }
    
    attempts++;
    document.getElementById('guessAttempts').textContent = `Deneme: ${attempts}`;
    
    if (guess === targetNumber) {
        resultElement.textContent = `Tebrikler! ${attempts} denemede bildiniz.`;
        setTimeout(initGuessNumberGame, 2000);
    } else if (guess < targetNumber) {
        resultElement.textContent = 'Daha büyük bir sayı deneyin.';
    } else {
        resultElement.textContent = 'Daha küçük bir sayı deneyin.';
    }
}

// Diğer oyunların fonksiyonları (hafıza oyunu, tic tac toe vb.)
// ...
