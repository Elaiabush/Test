document.getElementById('loveForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var yourName = document.getElementById('yourName').value.trim();
    var partnerName = document.getElementById('partnerName').value.trim();

    var loveScore = calculateLoveScore();

    animateLoveScore(loveScore);
});

function calculateLoveScore() {
    return Math.floor(Math.random() * 100) + 1; // Generate a random score between 1 and 100
}

function animateLoveScore(finalScore) {
    var resultElement = document.getElementById('result');
    var start = 0;
    var end = finalScore;
    var duration = 1000; // milliseconds
    var range = end - start;
    var current = start;
    var increment = finalScore > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));

    var timer = setInterval(function () {
        current += increment;
        resultElement.innerText = 'Love Score: ' + current + '%';
        if (current === end) {
            clearInterval(timer);
            // Check if the final score is below 50%
            if (finalScore < 50) {
                playJumpScare();
            }
        }
    }, stepTime + Math.random() * 50); // Add slight randomness to stepTime
}
