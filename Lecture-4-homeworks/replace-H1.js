function replace(string, valueToReplace, valueToReplaceWith) {
  if (
    typeof string !== "string" ||
    typeof valueToReplace !== "string" ||
    typeof valueToReplaceWith !== "string"
  ) {
    return "All parameters value must be string";
  }
  const index = string.indexOf(valueToReplace);
  if (index == -1) {
    return "Something went wrong";
  }
  const lengthOfReplacement = valueToReplace.length;
  const slicedleft = string.slice(0, index);
  const slicedRight = string.slice(index + lengthOfReplacement, string.length);
  return slicedleft + valueToReplaceWith + slicedRight;
}

console.log(replace("Davit", "d", "ti"));
console.log(replace(1, "d", "ti"));
console.log(replace("Davit", "t", "ti"));
