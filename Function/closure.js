//Global variables can be made local (private) with closures.
//Closures makes it possible for a function to have "private" variables.
function myFunction() {
  let a = 4;//A local variable is a "private" variable defined inside a function.
  b=15;
  return a * a;
}
console.log(myFunction());
let a = 4;//a is global variable defined outside the function

//Undeclared variables (created without a keyword var, let, const), are always global, even if they are created inside a function.
console.log(b)

let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();

console.log(counter);// The counter should now be 3

//In the below code: The counter should be local to the add() function, to prevent other code from changing it, otherwise:
// Initiate counter
let counter1 = 0;

// Function to increment counter
function add1() {
  let counter1 = 0;
  counter1 += 1;
}

// Call add() 3 times
add1();
add1();
add1();
console.log(counter1)// The counter should now be 3. But it is 0


//Closure in Practice (Data Privacy)
function createBankAccount() {
  let balance = 0; // private variable

  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      balance -= amount;
      return balance;
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount();
console.log(account.deposit(100));  // 100
console.log(account.withdraw(30));  // 70
console.log(account.getBalance());  // 70


//setTimeout with Closure
function greet(name) {
  setTimeout(function() {
    console.log("Hello, " + name);
  }, 2000);
}

greet("Azad"); // 👉 "Hello, Azad" after 2s


// What is a Closure?
// A closure is created when a function “remembers” the variables from its outer scope, even after that outer function has finished executing.