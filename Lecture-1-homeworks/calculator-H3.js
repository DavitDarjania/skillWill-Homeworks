function calculator(a, b, operation) {
  const operationArr = ["+", "-", "*", "/"];
  if (
    typeof a != "number" ||
    typeof b != "number" ||
    !operationArr.includes(operation)
  ) {
    return false;
  }
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "/") {
    if (b === 0) {
      return "Cannot divide by 0";
    }
    return a / b;
  } else if (operation === "*") {
    return a * b;
  }
}

console.log(calculator(10, 12, "+"));
console.log(calculator(10, 0, "/"));
console.log(calculator(20, 5, "*"));
console.log(calculator(2, 30, "-"));
console.log(calculator("davit", "darjania", "-"));
console.log(calculator(3, 7, "plus"));
