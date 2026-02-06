const gameBoard = document.getElementById("gameBoard");
const restartBtn = document.getElementById("restartBtn");

const symbols = ["🍎", "🍌", "🍇", "🍓", "🍎", "🍌", "🍇", "🍓"];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

/* Shuffle cards */
function shuffleCards(array) {
  return array.sort(() => Math.random() - 0.5);
}

/* Create game board */
function createBoard() {
  gameBoard.innerHTML = "";
  shuffleCards(symbols).forEach((symbol) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.innerText = symbol;
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}

/* Flip card */
function flipCard() {
  if (lockBoard || this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;
    checkMatch();
  }
}

/* Check match */
function checkMatch() {
  lockBoard = true;

  if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
    resetTurn();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetTurn();
    }, 800);
  }
}

/* Reset selection */
function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

/* Restart game */
restartBtn.addEventListener("click", createBoard);

/* Start game */
createBoard();
