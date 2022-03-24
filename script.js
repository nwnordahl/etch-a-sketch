const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".button-container");

let color = "black";
const colorPicker = document.querySelector("input[type=color]");
colorPicker.addEventListener("input", (e) => {
  color = e.target.value;
});

const body = document.querySelector("body");
let n = 16;

for (let i = 0; i < n ** 2; i++) {
  let div = document.createElement("div");
  div.classList.add("square");
  container.appendChild(div);
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

let divList = document.querySelectorAll(".square");

let mouseClick = false;
container.addEventListener("click", (e) => {
  if (mouseClick) {
    mouseClick = false;
  } else {
    mouseClick = true;
  }
});

divList.forEach((div) =>
  div.addEventListener("mouseover", (e) => {
    if (mouseClick) {
      if (
        e.target.style.backgroundColor &&
        e.target.style.backgroundColor !== "rgb(246, 237, 232)"
      ) {
        e.target.style.backgroundColor = "#f6ede8";
      } else if (rainbowMode) {
        e.target.style.backgroundColor = randomColor();
        return;
      } else {
        e.target.style.backgroundColor = color;
      }
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
    e.target.style.color = "#4a5096";
    e.target.style.backgroundColor = "#abc4ff";
    rainbowMode = false;
  } else {
    e.target.textContent = "\u{1F308} On";
    e.target.style.color = "#edf2fb";
    e.target.style.backgroundColor = "#80a5ff";
    rainbowMode = true;
  }
}

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", removeColors);

let rainbowMode = false;
const rainbowButton = document.querySelector("#rainbow-button");
rainbowButton.addEventListener("click", rainbow);

const decrementButton = document.querySelector("#decrement-button");
const incrementButton = document.querySelector("#increment-button");

incrementButton.addEventListener("click", (e) => {
  n++;
  let squares = document.querySelectorAll(".square");

  //   Remove old squares
  squares.forEach((square) => {
    container.removeChild(square);
  });

  for (let i = 0; i < n ** 2; i++) {
    let div = document.createElement("div");
    div.style.height = `${90 / n}vh`;
    div.style.width = `${90 / n}vh`;
    div.classList.add("square");
    container.appendChild(div);
  }

  divList = document.querySelectorAll(".square");

  divList.forEach((div) =>
    div.addEventListener("mouseover", (e) => {
      if (mouseClick) {
        if (
          e.target.style.backgroundColor &&
          e.target.style.backgroundColor !== "rgb(246, 237, 232)"
        ) {
          e.target.style.backgroundColor = "#f6ede8";
        } else if (rainbowMode) {
          e.target.style.backgroundColor = randomColor();
          return;
        } else {
          e.target.style.backgroundColor = color;
        }
      }
    })
  );

  resetButton.removeEventListener("click");
  buttonContainer.removeChild(resetButton);
  resetButton = document.createElement("button");
  resetButton.id = "reset-button";
  resetButton.textContent = "\u{1F504}";
  buttonContainer.prepend(resetButton);
  resetButton.addEventListener("click", removeColors);
});

decrementButton.addEventListener("click", (e) => {
  n--;
  let squares = document.querySelectorAll(".square");

  //   Remove old squares
  squares.forEach((square) => {
    container.removeChild(square);
  });

  for (let i = 0; i < n ** 2; i++) {
    let div = document.createElement("div");
    div.style.height = `${90 / n}vh`;
    div.style.width = `${90 / n}vh`;
    div.classList.add("square");
    container.appendChild(div);
  }

  divList = document.querySelectorAll(".square");

  divList.forEach((div) =>
    div.addEventListener("mouseover", (e) => {
      if (mouseClick) {
        if (
          e.target.style.backgroundColor &&
          e.target.style.backgroundColor !== "rgb(246, 237, 232)"
        ) {
          e.target.style.backgroundColor = "#f6ede8";
        } else if (rainbowMode) {
          e.target.style.backgroundColor = randomColor();
          return;
        } else {
          e.target.style.backgroundColor = color;
        }
      }
    })
  );

  resetButton.removeEventListener("click");
  buttonContainer.removeChild(resetButton);
  resetButton = document.createElement("button");
  resetButton.id = "reset-button";
  resetButton.textContent = "\u{1F504}";
  buttonContainer.prepend(resetButton);
  resetButton.addEventListener("click", removeColors);
});
