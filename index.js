// ==============================
// Variables
// ==============================

const cells = document.querySelectorAll(".cell");
const right = document.getElementById("right");
const down = document.getElementById("down");
const left = document.getElementById("left");
const top1 = document.getElementById("top1");
const panda = document.getElementById("panda");
const modalWindow = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const screen = document.getElementById("screen");

let currIndex = 0;

// ==============================
// Utility Functions
// ==============================

function renderPanda() {
  cells.forEach((cell) => {
    cell.classList.remove("player");
  });
  panda.classList.add("panda");
}

// function renderModalWindow() {
//   document.body.classList.add("blur-2xl");
//   console.log(modalWindow);
//   modalWindow.classList.remove("hidden");
//   //modalWindow.classList.add("visible");
// }

function renderPlayer(currentIndex) {
  cells.forEach((cell) => {
    cell.classList.remove("player");
  });
  cells[currentIndex].classList.add("player");
}

function openModalWindow(e) {
  // blur screen
  screen.classList.add("blur-2xl");

  // make modal window visible
  modalWindow.classList.remove("hidden");
}

function closeModalWindow(e) {
  e.target.parentElement.parentElement.classList.add("hidden");
  screen.classList.remove("blur-2xl");
}

// ==============================
// Event Listeners
// ==============================

right.addEventListener("click", () => {
  if (currIndex % 4 !== 3) {
    currIndex += 1;
    renderPlayer(currIndex);
  } else {
    openModalWindow();
  }
});

left.addEventListener("click", () => {
  if (currIndex % 4 !== 0) {
    currIndex -= 1;
    renderPlayer(currIndex);
  } else {
    openModalWindow();
  }
});

top1.addEventListener("click", () => {
  if (currIndex - 4 >= 0) {
    currIndex -= 4;
    renderPlayer(currIndex);
  } else {
    openModalWindow();
  }
});

down.addEventListener("click", () => {
  if (currIndex >= 0 && currIndex < cells.length - 4) {
    currIndex += 4;
    renderPlayer(currIndex);
  } else {
    openModalWindow();
  }
});

closeModal.addEventListener("click", (e) => {
  closeModalWindow(e);
});
