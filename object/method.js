//Object methods are actions that can be performed on objects.
//A method is a function definition stored as a property value.
//this refers to the person object
const person = {
  firstname: "Tahsin",
  lastname: "Shaikat",
  age: 22,
  eyecolor: "Black",
  fullname: function(){
    return this.firstname+ " " + this.lastname;
  }
};

console.log(person.fullname());// objectName.methodName() 

//Adding a Method to an Object
person.name = function() {
  return this.firstname + " " + this.lastname;
};
console.log(person.name());

//using to uppercase method
person.uppername= function(){
    return (this.firstname + " " + this.lastname).toUpperCase();
}

console.log(person.uppername());

let text = JSON.stringify(person);
console.log(text)