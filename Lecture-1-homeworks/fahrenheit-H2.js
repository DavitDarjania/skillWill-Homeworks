// Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9.

function convertToCelsus(fahrenheit) {
  if (typeof fahrenheit != "number") {
    return false;
  }
  const celsius = ((fahrenheit - 32) * 5) / 9;
  const rounded = celsius.toFixed(2); // Since the celsius value can have many decimal places (for example, 37.77777777777778), it’s better to round it and keep only the necessary digits after the decimal point
  return rounded;
}

console.log(convertToCelsus(100));
console.log(convertToCelsus("davit"));
