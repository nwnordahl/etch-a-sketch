const container = document.querySelector(".container");
const n = 16;

for (let i = 0; i < n ** 2; i++) {
  let div = document.createElement("div");
  div.classList.add("test");
  container.appendChild(div);
}

const divList = document.querySelectorAll(".test");

divList.forEach((div) =>
  div.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "black";
  })
);

function removeColors(e) {
  divList.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", removeColors);
