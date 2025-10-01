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

// Using async/await
async function courseCompletion() {
  try {
    await enroll();
    await progress();
    const message = await getCertificate();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}


courseCompletion();


//What is Async/Await?
// Syntactic sugar over Promises

// Makes asynchronous code look and behave like synchronous code

// Built on top of Promises

// 1. Async Function
// Always returns a Promise

// If you return a value, it wraps it in a resolved Promise

// If you throw an error, it returns a rejected Promise



// 2. Await Keyword
// Pauses execution until the Promise settles

// Can only be used inside async functions

// Returns the resolved value of the Promise