const boxContainer = document.querySelector(".boxContainer");
const btn = document.querySelector("#btn");

function render(num) {
  for (i = 0; i < num * num; i++) {
    let insDiv = document.createElement("div");
    insDiv.classList.add("item");
    boxContainer.appendChild(insDiv);
    //insDiv.style.background = "white";
  }
}

function changeColor(e) {
  e.target.style.background = "blue";
}

boxContainer.addEventListener("mouseover", changeColor);

btn.addEventListener("click", () => {
  render(15);
});

render(15);
