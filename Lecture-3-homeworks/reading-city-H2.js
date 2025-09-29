const user = {
  banks: [
    {
      bankName: "firstBank",
      address: {
        city: "Qutaisi",
        street: "Aprili street",
      },
    },
    {
      bankName: "secondBank",
      address: {
        city: "Tbilisi",
        street: "Moscov Avenue",
      },
    },
    {
      bankName: "ThirdBank",
      address: {
        city: "Tbilisi",
        street: "Illia Chavchavadze",
      },
    },
  ],
};

function validateAndReturn({ banks }) {
  if (banks && banks[2] && banks[2].address) {
    return returnCity(user);
  } else {
    console.log("Object does not includes correct path");
  }
}

function returnCity({
  banks: [
    ,
    ,
    {
      address: { city },
    },
  ],
}) {
  return city;
}

console.log(validateAndReturn(user));

console.log(user.banks[2].address.city); // check
