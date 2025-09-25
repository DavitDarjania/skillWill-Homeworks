const user = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

let minAge = user[0].age;
let nameOfYoung;

user.forEach((person) => {
  if (person.age < minAge) {
    minAge = person.age;
    nameOfYoung = person.name;
  }
});

console.log(nameOfYoung);
