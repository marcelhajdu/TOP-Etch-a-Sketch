const boxContainer = document.querySelector(".boxContainer");
const btn = document.querySelector("#btn");

function render(num) {
  for (i = 0; i < num * num; i++) {
    let insDiv = document.createElement("div");
    insDiv.classList.add("item");
    boxContainer.appendChild(insDiv);
  }
}

function changeColor(e) {
  e.target.style.background = "blue";
}

boxContainer.addEventListener("mouseover", changeColor);

btn.addEventListener("click", () => {
  boxContainer.innerHTML = "";
  let num = prompt("Please type in how many bricks you want");
  if (num <= 33) {
    render(num);
  } else {
    render(33);
  }
});

render(15);
