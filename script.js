const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinBtn = document.getElementById('spinBtn');
const result = document.getElementById('result');

// Define possible symbols
const symbols = ['🍒', '🍋', '🍊', '7️⃣', '⭐'];

// Spin function
function spin() {
    // Disable button during spin
    spinBtn.disabled = true;
    result.textContent = 'Spinning...';

    // Randomly select symbols for each reel
    const spinReels = () => {
        const randomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];
        reel1.textContent = randomSymbol();
        reel2.textContent = randomSymbol();
        reel3.textContent = randomSymbol();
    };

    // Simulate spinning with a short animation
    let spins = 0;
    const maxSpins = 10;
    const interval = setInterval(() => {
        spinReels();
        spins++;
        if (spins >= maxSpins) {
            clearInterval(interval);
            checkWin();
            spinBtn.disabled = false;
        }
    }, 100); // Spin every 100ms
}

// Check for a win
function checkWin() {
    if (reel1.textContent === reel2.textContent && reel2.textContent === reel3.textContent) {
        result.textContent = 'You win! 🎉';
    } else {
        result.textContent = 'Try again!';
    }
}

// Event listener for the spin button
spinBtn.addEventListener('click', spin);