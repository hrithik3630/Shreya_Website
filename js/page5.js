const gameArea = document.getElementById("game-area");
const scoreEl = document.getElementById("score");
const winMessage = document.getElementById("win-message");

let score = 0;
const target = 10;

function updateScore() {
  scoreEl.textContent = `Hearts: ${score} / ${target}`;
  if (score >= target) {
    winMessage.style.display = "block";
    stopGame();
  }
}

let heartInterval = null;

function createHeart() {
  if (!gameArea) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";

  const maxLeft = gameArea.clientWidth - 30;
  const left = Math.max(0, Math.floor(Math.random() * maxLeft));
  heart.style.left = `${left}px`;

  const duration = 2 + Math.random() * 2.5;
  heart.style.animationDuration = `${duration}s`;

  const collect = () => {
    score += 1;
    updateScore();
    heart.remove();
  };

  heart.addEventListener("click", collect, { once: true });
  heart.addEventListener(
    "touchstart",
    (event) => {
      event.preventDefault();
      collect();
    },
    { passive: false, once: true }
  );
  heart.addEventListener("pointerdown", collect, { once: true });

  heart.addEventListener("animationend", () => {
    heart.remove();
  });

  gameArea.appendChild(heart);
}

function startGame() {
  updateScore();
  heartInterval = setInterval(createHeart, 700);
}

function stopGame() {
  if (heartInterval) {
    clearInterval(heartInterval);
    heartInterval = null;
  }
}

document.addEventListener("DOMContentLoaded", startGame);

if (gameArea) {
  gameArea.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      if (el && el.classList.contains("heart")) {
        el.click();
      }
    },
    { passive: false }
  );
}
