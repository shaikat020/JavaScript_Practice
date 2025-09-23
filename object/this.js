//Explicit Function Binding: call()
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

// Return "John Doe":
console.log(person1.fullName.call(person2));

//Function Borrowing: bind
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

// 1	bind()	this is in a function being called using bind()
// 2	apply()	this is in a function being called using apply()
// 2	call()	this is in a function being called using call()
// 3	Object method	this is in an object function (method)
// 4	Global scope	this is in a function in the global scope