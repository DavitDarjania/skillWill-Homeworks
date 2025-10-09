const form = document.querySelector("form");
const input = document.querySelector("[data-input]");
const output = document.querySelector(".output");
const validArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputArr = Array.from(input.value);
  if (!inputArr.every((element) => validArr.includes(element))) {
    alert("Incorrect form of input");
  }
  const numberArr = input.value.split(":");

  const numberLength = numberArr.length;
  const result =
    numberArr.reduce((acc, curr) => Number(acc) + Number(curr), 0) /
    numberLength;
  output.textContent = result.toFixed(2);
});
