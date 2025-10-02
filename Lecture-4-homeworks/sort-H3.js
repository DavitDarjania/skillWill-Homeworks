const unsorted = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
  { name: "Nino", age: 25 },
  { name: "Giorgi", age: 35 },
  { name: "Ana", age: 28 },
  { name: "Irakli", age: 40 },
  { name: "Mariam", age: 22 },
  { name: "Dato", age: 33 },
  { name: "Sandro", age: 27 },
  { name: "Salome", age: 24 },
  { name: "Tornike", age: 29 },
  { name: "Elene", age: 31 },
  { name: "Luka", age: 26 },
  { name: "Keti", age: 32 },
  { name: "Shota", age: 21 },
  { name: "Tamuna", age: 23 },
  { name: "Nikoloz", age: 36 },
  { name: "Tea", age: 34 },
  { name: "Gvantsa", age: 19 },
  { name: "Vakhtang", age: 38 },
];

const sorted = unsorted.sort((a, b) => a.age - b.age);
console.log(sorted);
