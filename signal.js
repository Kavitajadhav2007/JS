let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
{
  function resetLights() {
    red.classList.remove("active");
    yellow.classList.remove("active");
    green.classList.remove("active");
  }

  function startTrafficSignal() {
    resetLights();
    red.classList.add("active");

    setTimeout(() => {
      resetLights();
      yellow.classList.add("active");
    }, 3000);

    setTimeout(() => {
      resetLights();
      green.classList.add("active");
    }, 5000);
  }

  startTrafficSignal();
  setInterval(startTrafficSignal, 8000);
}
