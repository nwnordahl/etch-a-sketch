const container = document.querySelector(".container");
const n = 16;

for (let i = 0; i < n ** 2; i++) {
  let div = document.createElement("div");
  div.classList.add("test");
  container.appendChild(div);
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

const divList = document.querySelectorAll(".test");

divList.forEach((div) =>
  div.addEventListener("mouseover", (e) => {
    if (rainbowMode) {
      e.target.style.backgroundColor = randomColor();
      return;
    } else {
      e.target.style.backgroundColor = "black";
    }
  })
);

function removeColors(e) {
  divList.forEach((div) => {
    div.style.backgroundColor = "#f6ede8";
  });
}

function rainbow(e) {
  if (rainbowMode) {
    e.target.textContent = "\u{1F308} Off";
    rainbowMode = false;
  } else {
    e.target.textContent = "\u{1F308} On";
    rainbowMode = true;
  }
}

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", removeColors);

let rainbowMode = false;
const rainbowButton = document.querySelector("#rainbow-button");
rainbowButton.addEventListener("click", rainbow);
