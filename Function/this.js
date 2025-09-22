//In JavaScript, the this keyword refers to an object.
//The this keyword refers to different objects depending on how it is used:
//Alone, this refers to the global object.
//In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an object method, this refers to the object.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.
//When used alone, this refers to the global object.
let x = this;
console.log(x);
// In strict mode, when used alone, this also refers to the global object:
'use strict';
let y= this;
console.log(y);


//In a function, by default, this is the global object.
function myFunction() {
  return this;
}
console.log(myFunction());

//JavaScript strict mode does not allow default binding.
// When used in a function, in strict mode, this is undefined.
'use strict';
function myFunction1() {
  return this;
}
console.log(myFunction1());