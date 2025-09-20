//Arrow functions allows a shorter syntax for function expressions.
let myFunction = function(a, b) {return a * b}
//can be write -->let myFunction = (a, b) => a * b;


//Arrow functions do not have their own this. They are not well suited for defining object methods.
//Arrow functions are not hoisted. They must be defined before they are used
// This will not work
let myFunction1 = (x, y) => { x * y } ;

// This will not work
//let myFunction2 = (x, y) => return x * y ;

// Only this will work
let myFunction3 = (x, y) => { return x * y };

//Parameter
function myFunction4(x, y) {
  if (y === undefined) {
    y = 2;
  }  
//   console.log(y);
  return x;
}
console.log(myFunction(4));

//rest/spread parameter

function sum(...arr){
    let sum=0;
    for(let x of arr){
        sum+=x;
    }
    return sum;
}

let x= sum(10,20,30,10);
console.log(x);



//The Arguments Object: JavaScript functions have a built-in object called the arguments object.
x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(x);