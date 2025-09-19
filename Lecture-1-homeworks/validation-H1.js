function validateAndAdd(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "შეცდომა მატრიცაში";
  }
  return a + b;
}
console.log(validateAndAdd("davit", 20));
console.log(validateAndAdd(30, 20));
