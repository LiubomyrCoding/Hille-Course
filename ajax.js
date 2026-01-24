const timer = document.querySelector(".timer");

let timeSet = 63

let seconds = timeSet % 60;

let minutes = (timeSet - seconds) / 60;

if (seconds < 10) {
  seconds = "0" + seconds;
}

if (minutes < 10) {
  minutes = "0" + minutes;
}

timer.textContent = `${minutes}:${seconds}`;

  const startInterval = setInterval(() => {
    let resultSeconds = seconds--

    const resultMinutes = minutes.toString().padStart(2, '0')
    const startingSeconds = resultSeconds.toString().padStart(2, '0')

    if(resultSeconds == 0 && minutes == 0) {
      clearInterval(startInterval)
    }
    else if(resultSeconds == 0 && minutes > 0) {
      minutes--
      seconds = 59
    }

    timer.textContent = `${resultMinutes}:${startingSeconds}`
  }, 1000)
