/* eslint-disable no-plusplus */

const squares = document.querySelectorAll(".square");
const score = document.querySelector("#score");
const miss = document.querySelector("#miss");

let result = 0;
let missScore = 0;
let hitPosition;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("goblin");
  });
  const randomS = squares[Math.floor(Math.random() * 16)];
  randomS.classList.add("goblin");
  hitPosition = randomS.id;
}

export default function gamePlay() {
  setInterval(randomSquare, 1000);
  squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === hitPosition) {
        result++;
        score.textContent = result;
      }
      if (square.id !== hitPosition) {
        missScore++;
        miss.textContent = missScore;
      }
      if (missScore === 5) {
        alert(`Game over!Your final score is ${result}`);
        missScore = null;
        miss.textContent = 0;
        result = null;
        score.textContent = result;
      }
    });
  });
}
