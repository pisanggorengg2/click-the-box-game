let score = 0;
let time = 10;
let gameInterval;

const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

box.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveBox();
});

function moveBox() {
  const x = Math.random() * 350;
  const y = Math.random() * 350;
  box.style.left = x + "px";
  box.style.top = y + "px";
}

function startGame() {
  score = 0;
  time = 10;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;

  moveBox();

  gameInterval = setInterval(() => {
    time--;
    timeDisplay.textContent = time;

    if (time === 0) {
      clearInterval(gameInterval);
      alert("Game Over! Score: " + score);
    }
  }, 1000);
}
