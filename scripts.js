let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateDisplay() {
    const display = document.getElementById('stopwatch');
    display.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}<span id="milliseconds">:${formatMilliseconds()}</span>`;

    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function formatMilliseconds() {
    return String(milliseconds).padStart(3, '0');
}

function start() {
    if (!isRunning) {
        timer = setInterval(updateDisplay, 10);
    }
    isRunning = true;
}

function stop() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateDateTime() {
    const dateTime = new Date();
    const datetimeDisplay = document.getElementById('datetime');
    datetimeDisplay.textContent = dateTime.toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display the date and time immediately