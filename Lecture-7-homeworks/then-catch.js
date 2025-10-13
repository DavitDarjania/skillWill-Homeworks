function makeToys() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.1) {
      mySetTimeout(3000).then((res) => {
        console.log(res);

        resolve("Undefected");
      });
    } else {
      reject("Defected");
    }
  });
}

function sellToys(status) {
  return new Promise((resolve, reject) => {
    if (status === "Undefected") {
      if (Math.random() > 0.2) {
        mySetTimeout(1000).then((res) => {
          console.log(res);

          resolve("Toy has been sold");
        });
      } else {
        reject("Toy was unsuccessfull");
      }
    }
  });
}

function deliverToys(ifsold) {
  return new Promise((resolve, reject) => {
    if (ifsold === "Toy has been sold") {
      mySetTimeout(2000).then((res) => {
        console.log(res);
        resolve("Your toy has been delivered");
      });
    }
  });
}

function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`You waited ${delay / 1000} seconds.`);
    }, delay);
  });
}

makeToys()
  .then((resolve) => sellToys(resolve))
  .then((resolve) => deliverToys(resolve))
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
