var flavors = document.querySelector(".change-color");

function changeColor() {
  flavors.classList.add("var(--red, #CF9697);");
}
flavors.addEventListener("click", changeColor);
