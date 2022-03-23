const container = document.querySelector(".container");
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

const divList = document.querySelectorAll(".square");

divList.forEach((div) =>
  div.addEventListener("click", (e) => {
    console.log(e.target.style.backgroundColor);
    if (
      e.target.style.backgroundColor &&
      e.target.style.backgroundColor !== "rgb(246, 237, 232)"
    ) {
      e.target.style.backgroundColor = "#f6ede8";
    } else if (rainbowMode) {
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

  const divList = document.querySelectorAll(".square");

  divList.forEach((div) =>
    div.addEventListener("click", (e) => {
      console.log(e.target.style.backgroundColor);
      if (
        e.target.style.backgroundColor &&
        e.target.style.backgroundColor !== "rgb(246, 237, 232)"
      ) {
        e.target.style.backgroundColor = "#f6ede8";
      } else if (rainbowMode) {
        e.target.style.backgroundColor = randomColor();
        return;
      } else {
        e.target.style.backgroundColor = "black";
      }
    })
  );
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

  const divList = document.querySelectorAll(".square");

  divList.forEach((div) =>
    div.addEventListener("click", (e) => {
      console.log(e.target.style.backgroundColor);
      if (
        e.target.style.backgroundColor &&
        e.target.style.backgroundColor !== "rgb(246, 237, 232)"
      ) {
        e.target.style.backgroundColor = "#f6ede8";
      } else if (rainbowMode) {
        e.target.style.backgroundColor = randomColor();
        return;
      } else {
        e.target.style.backgroundColor = "black";
      }
    })
  );
});
