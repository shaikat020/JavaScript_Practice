// Copies properties from a source object to a target object
// Object.assign(target, source)

//  Creates an object from an existing object
// Object.create(object)

//  Returns an array of the key/value pairs of an object
// Object.entries(object)

//  Creates an object from a list of keys/values
// Object.fromEntries()

//  Returns an array of the keys of an object
// Object.keys(object)

//  Returns an array of the property values of an object
// Object.values(object)

//  Groups object elements according to a function
// Object.groupBy(object, callback)


const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Object.groupBy(fruits, myCallback);

// Display Results
let text ="These fruits are Ok: \n";
for (let [x,y] of result.ok.entries()) {
  text += y.name + " " + y.quantity + "\n";
}

text += "\nThese fruits are low: \n";
for (let [x,y] of result.low.entries()) {
  text += y.name + " " + y.quantity + "\n";
}

console.log(text);