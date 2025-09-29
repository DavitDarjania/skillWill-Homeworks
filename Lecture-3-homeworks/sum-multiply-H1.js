function sumOrMultiply(a = null, b = null, ...args) {
  if (args.length === 0) {
    return "Not Enough Parameters";
  }
  if (
    typeof a != "number" ||
    typeof b != "number" ||
    args.every((num) => typeof num != "number")
  ) {
    return "Input only numeric value";
  }
  const sum = a + b;
  const multiply = args.reduce((acc, curr) => acc * curr, 1);
  return [sum, multiply];
}

console.log(sumOrMultiply(1, 2, "3"));
console.log(sumOrMultiply("1", 2, 3));
console.log(sumOrMultiply(1, 2, 3, 4, 5, 6));
