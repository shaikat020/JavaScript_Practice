const payment_success = true;
const marks = 80;

function enroll() {
  console.log("Course enrollment is in progress.....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payment_success) {
        resolve();
      } else {
        reject("Payment failed.");
      }
    }, 2000);
  });
}

function progress() {
  console.log("Course on progress....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get certificate.");
      }
    }, 4000);
  });
}

function getCertificate() {
  console.log("Preparing your certificate....");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Congrats! You got the certificate");
    }, 6000);
  });
}

// Chaining with Promises
enroll()
  .then(progress)
  .then(getCertificate)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
