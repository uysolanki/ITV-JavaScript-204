let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnX = true;
let count = 0;

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!box.innerText) {
      box.innerText = "X"; 
      box.disabled = true; 
      count++;

      if (checkWinner("X")) return; 
      if (count < 9) setTimeout(computerMove, 500); 
    }
  });
});


const computerMove = () => {
  let emptyBoxes = [...boxes].filter(box => !box.innerText);
  if (emptyBoxes.length) {
    let box = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    box.innerText = "O";
    box.disabled = true;
    count++;
    checkWinner("O");
  }
};

const checkWinner = (player) => {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    if (boxes[a].innerText === player && boxes[b].innerText === player && boxes[c].innerText === player) {
      msg.innerText = `Winner: ${player}`;
      msgContainer.classList.remove("hide");
      disableAll();
      return true;
    }
  }
  if (count === 9) gameDraw();
  return false;
};

const gameDraw = () => {
  msg.innerText = "It's a Draw!";
  msgContainer.classList.remove("hide");
};

const disableAll = () => boxes.forEach(box => box.disabled = true);

const resetGame = () => {
  boxes.forEach(box => {
    box.innerText = "";
    box.disabled = false;
  });
  msgContainer.classList.add("hide");
  count = 0;
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);