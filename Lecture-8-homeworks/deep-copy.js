const userProfile = {
  id: 101,
  name: {
    first: "Davit",
    last: "Darjania",
  },
  contact: {
    email: "davit@example.com",
    phone: {
      mobile: "+995 555 123 456",
      home: "+995 322 987 654",
    },
  },
  address: {
    country: "Georgia",
    city: "Tbilisi",
    street: {
      name: "Rustaveli Ave",
      number: 22,
    },
  },
  skills: {
    programming: ["Python", "JavaScript", "C#"],
    languages: {
      native: "Georgian",
      foreign: ["English", "German"],
    },
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
  },
};
async function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return Promise.reject("Type of input is not object");
  }

  if (Array.isArray(obj)) {
    const arrCopy = await Promise.all(
      obj.map(async (el) => {
        if (typeof el === "object" && el !== null) {
          return await deepCopy(el);
        }
        return el;
      })
    );
    return arrCopy;
  }

  const result = {};

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      result[key] = await deepCopy(value);
    } else {
      result[key] = value;
    }
  }

  return result;
}
deepCopy(userProfile)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
