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