// Menü yönetimi ve oyun başlatma
function showGame(gameId) {
    document.querySelectorAll('.game').forEach(game => {
        game.classList.remove('active');
    });
    document.getElementById(gameId).classList.add('active');
    initializeGame(gameId);
}

function hideAllGames() {
    document.querySelectorAll('.game').forEach(game => {
        game.classList.remove('active');
    });
}

function initializeGame(gameId) {
    switch(gameId) {
        case 'guessNumberGame': initGuessNumberGame(); break;
        case 'memoryGame': initMemoryGame(); break;
        case 'ticTacToe': initTicTacToe(); break;
        case 'colorGame': initColorGame(); break;
        case 'reactionGame': initReactionGame(); break;
    }
}

// Menü item'larına event listener ekleme
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu-item').forEach(item => {
        const gameId = item.getAttribute('onclick').match(/'([^']+)'/)[1];
        item.onclick = () => showGame(gameId);
    });
});
