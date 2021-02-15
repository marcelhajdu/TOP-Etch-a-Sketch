const boxContainer = document.querySelector(".boxContainer");

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

render(15);
