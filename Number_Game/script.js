`use strict`;

// let randomNumber = Math.floor(Math.random() * 20) + 1;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highestScore = 0;
console.log(randomNumber, "Number");

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  let totalChance = Number(document.querySelector(".score").textContent);

  console.log(totalChance, typeof totalChance, "this");

  if (totalChance > 0) {
    if (!guess) {
      document.querySelector(".message").textContent = "No number entered";
      document.querySelector(".score").textContent = totalChance;
    } else {
      totalChance = totalChance - 1;

      if (guess === randomNumber) {
        document.querySelector(".message").textContent = "Matched!!";
        document.querySelector(".number").textContent = randomNumber;
        document.querySelector(".score").textContent = totalChance;
        document.body.style.backgroundColor = "green";
        console.log(
          totalChance,
          highestScore,
          "guess",
          typeof highestScore,
          typeof totalChance
        );
        if (totalChance > highestScore) {
          highestScore = totalChance;
          document.querySelector(".highscore").textContent = totalChance;
        }
      } else {
        document.querySelector(".score").textContent = totalChance;
        if (guess > randomNumber) {
          document.querySelector(".message").textContent =
            "Your guess is high!!";
        } else {
          document.querySelector(".message").textContent =
            "Your guess is low!!";
        }
      }
    }
  } else {
    document.querySelector("h1").textContent =
      "Please try again your chances are empty";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber, "Number");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = "20";
  document.body.style.backgroundColor = "black";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("h1").textContent = "Guess My Number!";
});
