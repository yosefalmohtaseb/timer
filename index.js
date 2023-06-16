function showTimer() {
    const timerDiv = document.getElementById('timer');
    const stopwatchDiv = document.getElementById('stopwatch');
  
    if (getComputedStyle(timerDiv).display !== 'block') {
      timerDiv.style.display = 'block';
      stopwatchDiv.style.display = 'none';
    }
  }
  
  function showStopwatch() {
    const timerDiv = document.getElementById('timer');
    const stopwatchDiv = document.getElementById('stopwatch');
  
    if (getComputedStyle(stopwatchDiv).display !== 'block') {
      stopwatchDiv.style.display = 'block';
      timerDiv.style.display = 'none';
    }
  }
  