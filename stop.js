let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

// let button = document.querySelectorAll(".button");
// console.log(button);

function start() {
  if (timer !== null) {
    return;
  }

  timer = setInterval(() => {
    seconds++;

    if (seconds === 10) {
      //   seconds = 0;
      //   minutes++;
      stop();
    }

    if (minutes === 1) {
      stop();
      return;
    }

    document.getElementById("display").innerHTML =
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0");
  }, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}
