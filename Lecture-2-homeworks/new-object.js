const user = { name: "Davit", age: 21 };

function createNewObject(obj) {
  return { ...obj };
}

// Check
const newUser = createNewObject(user);
newUser.name = "Tatia";
console.log(user.name);
console.log(newUser.name); // They are different
