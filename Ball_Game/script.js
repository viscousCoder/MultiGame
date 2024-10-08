"use strict";
let ball = document.getElementById("ball");
let btn = document.getElementById("actionBtn");

let xPos = 50;
let yPos = 50;
let xSpeed = 2;
let ySpeed = 2;

let isMoving = true;
let intervalId;

function moveBall() {
  let containerWidth = window.innerWidth - 25;
  let conatinerHeight = window.innerHeight - 25;
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;
  if (xPos > containerWidth || xPos - 25 < 0) {
    xSpeed = -xSpeed;
  }
  if (yPos > conatinerHeight || yPos - 25 < 0) {
    ySpeed = -ySpeed;
  }
  ball.style.left = `${xPos}px`;
  ball.style.top = `${yPos}px`;
}

intervalId = setInterval(moveBall, 10);
btn.addEventListener("click", function () {
  if (isMoving) {
    clearInterval(intervalId);
    btn.textContent = "Play";
  } else {
    intervalId = setInterval(moveBall, 10);
    btn.textContent = "Stop";
  }
  isMoving = !isMoving;
});
