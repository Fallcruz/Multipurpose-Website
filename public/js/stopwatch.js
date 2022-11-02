var hours = 00;
var minutes = 00;
var seconds = 00;
var tens = 00;
var appendHours = document.getElementById("hours");
var appendMinutes = document.getElementById("minutes");
var appendSeconds = document.getElementById("seconds");
var appendTens = document.getElementById("tens");
var buttonStart = document.getElementById("btnStart");
var buttonStop = document.getElementById("btnStop");
var buttonClear = document.getElementById("btnClear");
var Interval;

function startTime () {
  tens++;
  if (tens > 9){
    appendTens.innerHTML = tens;
  }
  if (tens > 99){
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
    let mySound = new Audio('../public/sound/tick.wav');
    mySound.play();
  }
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
  if (seconds >= 60){
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
  if (minutes > 9){
    appendMinutes.innerHTML = minutes;
  }
  if (minutes >= 60){
    hours++;
    appendHours.innerHTML = "0" + hours;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
    minutes = 0;
    appendMinutes.innerHTML = "0" + 0;
  }
}

function Start() {
  clearInterval(Interval);
  Interval = setInterval(startTime, 10);
}

function Stop() {
  clearInterval(Interval);
}

function Clear() {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  hours = "00";
  appendHours.innerHTML = hours;
  appendMinutes.innerHTML = minutes;
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
}