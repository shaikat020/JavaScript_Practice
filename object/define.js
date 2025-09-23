//An object literal is a list of property key:values inside curly braces { }

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person);

//no need to use new Object().
//For readability, simplicity and execution speed, use the object literal method.
// const person = new Object({
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// });


//The Object.create() method creates an object from an existing object.
const man = Object.create(person);
console.log(man);
man.firstName="Shaikat";
man.lastName="Tahsin";
console.log(man);
//Doesnt work?
//console.log() in Chrome/Node often shows only own properties of an object.
//Inherited properties (from prototype) don’t show unless you expand the object in the console.
const man1 = {...person};
console.log(man1);
man1.firstName="Shaikat";
man1.lastName="Tahsin";
console.log(man1);

//JavaScript Object fromEntries()

const myobj = Object.fromEntries(Object.entries(person));//Object.fromEntries() requires an iterable of key–value pairs (like Map or an array of [key, value] tuples). But person (or man1) is just a plain object, and plain objects are not iterable.
console.log(myobj);

// Iterarble object
const fruits = [
["apples", 300],
["pears", 900],
["bananas", 500]
];
const myObj1 = Object.fromEntries(fruits);
console.log(myObj1);

//assign
const person2 = { 
  firstName: "Anne", 
  lastName :"Smith" 

}
Object.assign(person, person2);
console.log(person);

//In JavaScript, Objects are King.
// If you Understand Objects, you Understand JavaScript.
// In JavaScript, almost "everything" is an object.
// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects
// All JavaScript values, except primitives, are objects.


//Primitive values are immutable (they are hardcoded and cannot be changed).
//if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

//but JavaScript Objects are Mutable. They are addressed by reference, not by value.