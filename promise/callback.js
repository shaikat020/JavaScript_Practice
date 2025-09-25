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