const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const diceImg = document.querySelector(".dice");
diceImg.style.display = "none";

let currentScore = 0;
let activPlayer = 0;
let score = [0, 0];
let gameOver = true;

btnRoll.addEventListener("click", () => {
  if (gameOver) {
    setTimeout(() => {
      diceImg.style.display = "block";
      const random = Math.floor(Math.random() * 6 + 1);
      diceImg.src = `../images/dice-${random}.png`;

      if (random != 1) {
        currentScore += random;
        document.querySelector(`#current--${activPlayer}`).textContent =
          currentScore;
      } else {
        currentScore = 0;
        document.querySelector(`#current--${activPlayer}`).textContent =
          currentScore;
        activPlayer = activPlayer === 0 ? 1 : 0;

        document.querySelector(".player--0").classList.toggle("player--active");
        document.querySelector(".player--1").classList.toggle("player--active");
      }
    }, 500);
  }
});

btnHold.addEventListener("click", () => {
  if (gameOver) {
    score[activPlayer] += currentScore;
    document.querySelector(`#score--${activPlayer}`).textContent =
      score[activPlayer];

    if (score[activPlayer] >= 100) {
      document
        .querySelector(`.player--${activPlayer}`)
        .classList.add("player--winner");
      gameOver = false;
    } else {
      currentScore = 0;
      document.querySelector(`#current--${activPlayer}`).textContent =
        currentScore;
      activPlayer = activPlayer === 0 ? 1 : 0;

      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");
    }
  }
});

btnNew.addEventListener("click", () => {
  currentScore = 0;
  activPlayer = 0;
  score = [0, 0];
  gameOver = true;

  document.querySelector(`#current--0`).textContent = currentScore;
  document.querySelector(`#current--1`).textContent = currentScore;
  document.querySelector(`#score--0`).textContent = currentScore;
  document.querySelector(`#score--1`).textContent = currentScore;
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
});
