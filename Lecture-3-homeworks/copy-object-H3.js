const originalObject = {
  name: "Davit",
  age: 21,
  address: {
    city: "Tbilisi",
    country: "Georgia",
  },
  hobbies: ["Playing Guitar", "Working Out"],
  nestedObject: {
    prop1: 1,
    prop2: 2,
  },
};

function makeFullCopy(obj) {
  const copiedObj = {
    ...obj,
    address: {
      ...obj.address, // because reference is not copied
    },
    hobbies: [...obj.hobbies],
    nestedObject: {
      ...obj.nestedObject,
    },
  };
  return copiedObj;
}

console.log(makeFullCopy(originalObject));
