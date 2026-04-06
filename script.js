let seconds = 0;
let timerInterval;

function startTimer() {
    if (timerInterval) return; 

    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById('display').innerText = `${seconds} seconds`;
    }, 1000);
}

// Add this function to pause the counter
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // Allows the Start button to work again
}

function resetTimer() {
    stopTimer(); // Reuse the stop logic
    seconds = 0;
    document.getElementById('display').innerText = `0 seconds`;
}