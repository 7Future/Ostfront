// Set the target date and time in UTC (considering the time difference for EST, UTC-5)
const targetDate = new Date("2024-01-20T16:00:00Z"); // Updated target date to January 20, 2024, 16:00:00 UTC

const countdownDate = targetDate.getTime();
const countdownSound = document.getElementById('countdownSound');
const timerDisplay = document.getElementById('timer');

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(timer);
    timerDisplay.innerHTML = '<button onclick="redirectToAnotherWebsite()" class="play-now-button">PLAY NOW</button>';
    countdownSound.play();
  } else {
    // Display the countdown timer
    timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    countdownSound.play();
  }
}, 1000);

function redirectToAnotherWebsite() {
  window.location.href = 'https://www.roblox.com/games/14699051982/'; // Replace with your desired URL
}