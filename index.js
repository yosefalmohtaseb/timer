// Timer variables
let timer;
let timerDisplay = document.getElementById("timer-display");
let startTimerButton = document.getElementById("start-timer-btn");
let resetTimerButton = document.getElementById("reset-timer-btn");
let timerSeconds = 0;

// Stopwatch variables
let stopwatch;
let stopwatchDisplay = document.getElementById("stopwatch-display");
let startStopwatchButton = document.getElementById("start-stopwatch-btn");
let resetStopwatchButton = document.getElementById("reset-stopwatch-btn");
let stopwatchSeconds = 0;

// Timer functions
function startTimer() {
  timer = setInterval(updateTimer, 1000);
  startTimerButton.disabled = true;
  resetStopwatch();
  stopwatchDisplay.style.display = "none";
  timerDisplay.style.display = "block";
}

function updateTimer() {
  timerSeconds++;
  let hours = Math.floor(timerSeconds / 3600);
  let minutes = Math.floor((timerSeconds % 3600) / 60);
  let seconds = timerSeconds % 60;

  timerDisplay.textContent = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;
}

function resetTimer() {
  clearInterval(timer);
  timerSeconds = 0;
  timerDisplay.textContent = "00:00:00";
  startTimerButton.disabled = false;
}

// Stopwatch functions
function startStopwatch() {
  stopwatch = setInterval(updateStopwatch, 1000);
  startStopwatchButton.disabled = true;
  resetTimer();
  timerDisplay.style.display = "none";
  stopwatchDisplay.style.display = "block";
}

function updateStopwatch() {
  stopwatchSeconds++;
  let hours = Math.floor(stopwatchSeconds / 3600);
  let minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  let seconds = stopwatchSeconds % 60;

  stopwatchDisplay.textContent = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;
}

function resetStopwatch() {
  clearInterval(stopwatch);
  stopwatchSeconds = 0;
  stopwatchDisplay.textContent = "00:00:00";
  startStopwatchButton.disabled = false;
}

// Helper function to format time values with leading zeros
function formatTime(time) {
  return time.toString().padStart(2, "0");
}

// Event listeners
startTimerButton.addEventListener("click", startTimer);
resetTimerButton.addEventListener("click", resetTimer);
startStopwatchButton.addEventListener("click", startStopwatch);
resetStopwatchButton.addEventListener("click", resetStopwatch);


// Toggle button
function showTimer() {
  const timerDiv = document.getElementById("timer");
  const stopwatchDiv = document.getElementById("stopwatch");

  if (getComputedStyle(timerDiv).display !== "block") {
    timerDiv.style.display = "block";
    stopwatchDiv.style.display = "none";
  }
}

function showStopwatch() {
  const timerDiv = document.getElementById("timer");
  const stopwatchDiv = document.getElementById("stopwatch");

  if (getComputedStyle(stopwatchDiv).display !== "block") {
    stopwatchDiv.style.display = "block";
    timerDiv.style.display = "none";
  }
}
