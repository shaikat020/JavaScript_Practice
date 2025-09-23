// The destructuring assignment syntax unpack object properties into variables
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName} = person;

console.log(firstName + " " + lastName);

//Object Default Values
let {country = "US"} = person;
console.log(firstName + " " + lastName + " "+ country);

//Object Property Alias
let {lastName : name} = person;
console.log(name);

//String Destructuring
let names = "W3Schools";
let [a1, a2, a3, a4, a5] = names;
console.log(a1,a2);

//Array Destructuring
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;
console.log(fruit1);
let [fruit3,,,fruit4] = fruits;//Skipping Array Values
const {[0]:fruit5 ,[1]:fruit6} = fruits;//Array Position Values

[firstName, lastName] = [lastName, firstName];//swap