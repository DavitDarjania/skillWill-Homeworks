async function makeToys() {
  if (Math.random() > 0.1) {
    const waiting = await mySetTimeout(3000);
    console.log(waiting);
    return "Undefected";
  } else {
    throw new Error("Defected");
  }
}

async function sellToys(status) {
  if (status === "Undefected") {
    if (Math.random() > 0.2) {
      const waiting = await mySetTimeout(1000);
      console.log(waiting);
      return "Toy has been sold";
    } else {
      throw new Error("Toy was unsuccessfull");
    }
  }
}

async function deliverToys(ifsold) {
  if (ifsold === "Toy has been sold") {
    const waiting = await mySetTimeout(2000);
    console.log(waiting);
    return "Your toy has been delivered";
  }
}

function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`You waited ${delay / 1000} seconds.`);
    }, delay);
  });
}

async function main() {
  try {
    const status = await makeToys();
    const sold = await sellToys(status);
    const delivered = await deliverToys(sold);
    console.log(delivered);
  } catch (error) {
    console.log(error.message);
  }
}
main();
