let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);
  return (
    String(hrs).padStart(2, "0") + ":" +
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0")
  );
}

function startStop() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      document.getElementById("display").textContent = timeToString(elapsedTime);
    }, 1000);
  }
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById("display").textContent = "00:00:00";
  elapsedTime = 0;
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const lapTime = timeToString(elapsedTime);
  const lapList = document.getElementById("laps");
  const li = document.createElement("li");
  li.textContent = `Lap - ${lapTime}`;
  lapList.appendChild(li);
}
