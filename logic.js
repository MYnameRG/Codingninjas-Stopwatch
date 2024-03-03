// Declare and initializting the variables
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalTimer = null;
let timeHeadlineTimer = "00:00:00";

// Access the DOM elements from HTML Page
const startTimerBtn = document.querySelector(".start");
const timerHeadline = document.querySelector(".timer-headline");

// Initialize the headline as default value mentioned
timerHeadline.innerHTML = timeHeadlineTimer;

function startIntervals() {
  // Initialize the interval for timer to start interval of every 100 ms or 0.001 s
  intervalTimer = setInterval(() => {
    timerHeadline.innerHTML = `${
      hours > 9 && hours <= 60 ? hours : "0" + hours
    }:${minutes > 9 && minutes <= 60 ? minutes : "0" + minutes}:${
      seconds > 9 && seconds <= 60 ? seconds : "0" + seconds
    }`;

    if (seconds < 60) {
      // If second not reach till 60, we need to give increament
      seconds++;
    } else if (minutes < 60) {
      // If second reach 60, we need to give increase the minute
      minutes++;
      seconds = 0;
    } else if (minutes < 60) {
      // If minute reach 60, we need to give increase the hour
      hours++;
      minutes = 0;
      seconds = 0;
    }
  }, 100);
}

function startTimer() {
  // We need to disabled the start button and if already start as well as clearInterval, if runs already
  startTimerBtn.classList.add("disabled");
  clearInterval(intervalTimer);
  startIntervals();
}

function resetTimer() {
  // We need to remove disabled the start button and if already start as well as clearInterval, if runs already
  hours = 0;
  minutes = 0;
  seconds = 0;

  startTimerBtn.classList.remove("disabled");
  clearInterval(intervalTimer);
  timerHeadline.innerHTML = timeHeadlineTimer;
}

function stopTimer() {
  // We need to stop the value increament only not other value to re-initialize
  startTimerBtn.classList.remove("disabled");
  clearInterval(intervalTimer);
}
