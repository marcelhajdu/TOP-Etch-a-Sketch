const boxContainer = document.querySelector(".boxContainer");

for (i = 0; i < 256; i++) {
  let insDiv = document.createElement("div");
  //insDiv.textContent = "Im a new div";
  insDiv.classList.add("item");
  boxContainer.appendChild(insDiv);
}
