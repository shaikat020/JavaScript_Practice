//"I will call back later!"
//A callback is a function passed as an argument to another function

function myDisplayer(some) {
  console.log(some)
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();

//call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer)

function myDisplayer(some) {
  console.log(some);
}

function myCalculator1(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator1(5, 5);


//A callback is a function passed as an argument to another function.
//Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, callback) {
  let sum = num1 + num2;
  if(callback) callback(sum);
  return sum;
}

myCalculator(5, 5, myDisplayer);// When pass a function as an argument, remember not to use parenthesis.

console.log(myCalculator(5,5))
