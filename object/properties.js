//Object can be accessed by 3 ways

const person = {
  firstname: "Tahsin",
  lastname: "Shaikat",
  age: 22,
  eyecolor: "Black"
};
//1st way
console.log(person.age);
//2nd way
console.log(person["eyecolor"]);
//3rd way
let x= "firstname";
let y= "lastname";
console.log(person[x], person[y]);

//add new properties to an existing object by simply giving it a value
person.nationality= "Bengali";
console.log(person);

//Object constructor
function Person(first, last, age, eyeColor){
    this.firstname= first;
    this.lastname=last;
    this.age =age ;
    this.eyecolor=eyeColor;
    this.nationality="Bengali";//default values
}

const father = new Person("Father", "name", 60, "black");
const mother = new Person("Mother", "name", 50, "black");
console.log("Details of father : \n", father);
console.log("\nDetails of mother : ", mother);

//The delete keyword deletes a property from an object
//The delete keyword deletes both the value of the property and the property itself.
//After deletion, the property cannot be used before it is added back again.
delete person.nationality;//or can delete 2 other ways
console.log(person);

//Nested Objects
//Property values in an object can be other objects
const Details = {
  firstname: "Tahsin",
  lastname: "Shaikat",
  age: 22,
  myCars : {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
};
console.log(Details.myCars.car1);
console.log(Details["myCars"]["car2"]);
let a = "myCars";
let b = "car3";
console.log(Details[a][b]);