const x = function mul(a,b){
    return a * b;
}

//The Function() Constructor
//Functions can also be defined with a built-in JavaScript function constructor called Function().
console.log(x(3,4));

const myfun = new Function("a", "b", "return a *b");
console.log(myfun(3,4));

// Hoisting applies to variable declarations and to function declarations.
// Because of this, JavaScript functions can be called before they are declared:
console.log(squa(5));
function squa(b){
    return b * b;
}

//Self-Invoking Functions
// Function expressions can be made "self-invoking".
//A self-invoking expression is invoked (started) automatically, without being called.

(function () {
  console.log("Hello!!");  // I will invoke myself
})();

//Functions are Objects
function myFunction(a) {
  return arguments.length;
}

console.log(myFunction(1,2,3));

//The toString() method returns the function as a string
console.log(myFunction.toString());