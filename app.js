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
  //insDiv.style.background = "white";
  boxContainer.innerHTML = "";
  render(15);
});

render(15);
