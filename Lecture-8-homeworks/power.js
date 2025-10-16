function expo(number, power) {
  if (power === 1) {
    return number;
  }
  return number * expo(number, power - 1);
}
console.log(expo(3, 3));
