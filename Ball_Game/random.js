// "use strict";
// let ball = document.getElementById("ball");
// let btn = document.getElementById("actionBtn");
// let xPos = 50;
// let yPos = 50;
// let xSpeed = 2;
// let ySpeed = 2;

const ball = document.getElementById("ball");
const stopButton = document.getElementById("actionBtn");

let xPos = 50;
let yPos = 50;
let xSpeed = 2;
let ySpeed = 2;
let intervalId;
let isMoving = true;

function moveBall() {
  xPos += xSpeed;
  yPos += ySpeed;

  if (xPos + 25 > window.innerWidth || xPos - 25 < 0) {
    xSpeed = -xSpeed;
  }
  if (yPos + 25 > window.innerHeight || yPos - 25 < 0) {
    ySpeed = -ySpeed;
  }

  ball.style.left = `${xPos}px`;
  ball.style.top = `${yPos}px`;
}

intervalId = setInterval(moveBall, 10);

stopButton.addEventListener("click", () => {
  if (isMoving) {
    clearInterval(intervalId);
    stopButton.textContent = "Play";
  } else {
    intervalId = setInterval(moveBall, 10);
    stopButton.textContent = "Stop";
  }
  isMoving = !isMoving;
});
