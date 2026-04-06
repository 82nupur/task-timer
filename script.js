let seconds = 0;
function startTimer() {
    setInterval(() => {
        seconds++;
        document.getElementById('display').innerText = `${seconds} seconds`;
    }, 1000);
}