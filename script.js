// Global variables
let n = 16;
let mouseClick = false;
let color = "black";
let rainbowMode = false;
let rainbowIndex = -1;
const rainbowColors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#9400D3",
];

// Query selectors
const body = document.querySelector("body");
const container = document.querySelector(".container");

const buttonContainer = document.querySelector(".button-container");
let resetButton = document.querySelector("#reset-button");
const decrementButton = document.querySelector("#decrement-button");
const incrementButton = document.querySelector("#increment-button");
const rainbowButton = document.querySelector("#rainbow-button");
const colorPicker = document.querySelector("input[type=color]");

// Initializing grid
for (let i = 0; i < n ** 2; i++) {
  let div = document.createElement("div");
  div.classList.add("square");
  container.appendChild(div);
}
let divList = document.querySelectorAll(".square");

// Helper functions
function removeColors(e) {
  divList.forEach((div) => {
    div.style.backgroundColor = "#f6ede8";
  });
}

function randomRainbowColor() {
  rainbowIndex++;
  if (rainbowIndex > 6) {
    rainbowIndex = 0;
  }

  return rainbowColors[rainbowIndex];
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

// Event listeners
container.addEventListener("click", (e) => {
  if (mouseClick) {
    mouseClick = false;
  } else {
    mouseClick = true;
  }
});

divList.forEach((div) =>
  div.addEventListener("click", (e) => {
    if (!mouseClick) {
      if (rainbowMode) {
        e.target.style.backgroundColor = randomRainbowColor();
      } else {
        e.target.style.backgroundColor = color;
      }
    }
  })
);

divList.forEach((div) =>
  div.addEventListener("mouseover", (e) => {
    if (mouseClick) {
      if (rainbowMode) {
        e.target.style.backgroundColor = randomRainbowColor();
      } else {
        e.target.style.backgroundColor = color;
      }
    }
  })
);

resetButton.addEventListener("click", removeColors);

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
    div.addEventListener("click", (e) => {
      if (!mouseClick) {
        if (rainbowMode) {
          e.target.style.backgroundColor = randomRainbowColor();
        } else {
          e.target.style.backgroundColor = color;
        }
      }
    })
  );

  divList.forEach((div) =>
    div.addEventListener("mouseover", (e) => {
      if (mouseClick) {
        if (rainbowMode) {
          e.target.style.backgroundColor = randomRainbowColor();
        } else {
          e.target.style.backgroundColor = color;
        }
      }
    })
  );

  buttonContainer.removeChild(resetButton);
  resetButton = document.createElement("button");
  resetButton.id = "reset-button";
  resetButton.textContent = "\u21BA";
  buttonContainer.prepend(resetButton);
  resetButton.addEventListener("click", removeColors);

  resetButton.click();
});

resetButton.click();
const saveButton = document.querySelector("#save-button");
saveButton.addEventListener("click", (e) => {
  // Create canvas
  const size = 50;
  let canvas = document.createElement("canvas");
  canvas.height = `${size * n}`;
  canvas.width = `${size * n}`;
  const ctx = canvas.getContext("2d");

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (e.target.style.backgroundColor) {
        ctx.fillStyle = "#f6ede8";
      } else {
        ctx.fillStyle = divList[i * n + j].style.backgroundColor;
      }
      ctx.fillRect(size * j, size * i, size, size);
    }
  }

  const dataUrl = canvas.toDataURL("image/png");
  const newTab = window.open("about:blank", "image from canvas");
  newTab.document.write("<img src='" + dataUrl + "' alt='from canvas'/>");
});

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
    div.addEventListener("click", (e) => {
      if (!mouseClick) {
        if (rainbowMode) {
          e.target.style.backgroundColor = randomRainbowColor();
        } else {
          e.target.style.backgroundColor = color;
        }
      }
    })
  );

  divList.forEach((div) =>
    div.addEventListener("mouseover", (e) => {
      if (mouseClick) {
        if (rainbowMode) {
          e.target.style.backgroundColor = randomRainbowColor();
        } else {
          e.target.style.backgroundColor = color;
        }
      }
    })
  );

  buttonContainer.removeChild(resetButton);
  resetButton = document.createElement("button");
  resetButton.id = "reset-button";
  resetButton.textContent = "\u21BA";
  buttonContainer.prepend(resetButton);
  resetButton.addEventListener("click", removeColors);

  resetButton.click();
});

rainbowButton.addEventListener("click", rainbow);

colorPicker.addEventListener("input", (e) => {
  color = e.target.value;
});
