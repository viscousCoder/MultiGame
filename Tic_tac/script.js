// let currentPlayer = "X";

// let arr = Array(9).fill(null);

// function checkWinner() {
//   if (
//     (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
//     (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
//     (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
//     (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
//     (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
//     (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
//     (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[7]) ||
//     (arr[6] !== null && arr[6] == arr[4] && arr[4] == arr[2])
//   ) {
//     document.write(`${currentPlayer} is the winner`);
//   }

//   if (!arr.some((e) => e == null)) {
//     document.write(`Game is draw`);
//     return;
//   }
// }

// function handleClick(ele) {
//   const id = Number(ele.id);
//   arr[id] = currentPlayer;
//   console.log(arr);
//   if (arr[id] !== null) return;
//   ele.innerText = currentPlayer;
//   checkWinner();
//   currentPlayer = currentPlayer === "X" ? "0" : "X";
// }

let turnIndicator = document.querySelector(".turn-indicator");
let winner = document.querySelector(".winner");
let btn = document.getElementById("restart-btn");

let isClickable = true;
let currentPlayer = "X";
let arr = Array(9).fill(null);

winner.classList.add("hidden");

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    isClickable = false;
    turnIndicator.classList.add("hidden");
    winner.classList.remove("hidden");
    winner.textContent = `${currentPlayer}'s wins`;
    return;
  }

  if (!arr.some((e) => e === null)) {
    turnIndicator.classList.add("hidden");
    winner.classList.remove("hidden");
    winner.textContent = `Match Draw`;
  }
}

function handleClick(ele) {
  if (isClickable) {
    let id = ele.id;
    if (arr[id] !== null) return;
    arr[id] = currentPlayer;
    //   if (arr[id] !== null) return;
    ele.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer == "X" ? "0" : "X";
    turnIndicator.textContent = `${currentPlayer}'s turn`;
  }
}

btn.addEventListener("click", function () {
  isClickable = true;
  arr = Array(9).fill(null);
  currentPlayer = "X";
  const cells = document.querySelectorAll(".col");
  cells.forEach((cell) => {
    cell.innerText = "";
  });
  turnIndicator.classList.remove("hidden");
  winner.classList.add("hidden");
  turnIndicator.textContent = "X's turn";
});
