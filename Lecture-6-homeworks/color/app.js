const form = document.querySelector("form");
const input = document.querySelector("[data-input]");
const colorArr = ["red", "blue", "green", "black", "white"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!colorArr.includes(input.value)) {
    alert("Incorrect color");
    return;
  }
  document.body.style.backgroundColor = `${input.value}`;
});
