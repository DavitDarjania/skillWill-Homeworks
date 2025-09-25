let a;
let b;
let counter = 0;
while (a !== 3 && b !== 3) {
  counter++;
  a = parseInt(Math.random() * 10);
  b = parseInt(Math.random() * 10);
}

if (a === 3 && b === 3) {
  console.log("There is a tie | Total attempts: ", counter);
} else if (a === 3) {
  console.log("a won | Total attempts: ", counter);
} else if (b === 3) {
  console.log("b won | Total attempts: ", counter);
}
