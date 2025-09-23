function Person(first, last, age, bloodgroup){
    this.firstname= first;
    this.lastname= last;
    this.age= age;
    this.bloodgroup = bloodgroup;
}

const person = new Person("Tahsin", "Shaikat", 22, "O");
console.log(person);

//add property in constructor 
Person.prototype.nationality= "Bengali";
console.log(person.nationality);
const newname= new Person("Tahsin", "Shaikat", 22, "O");;
newname.changename= function (surname){// Person.prototype.changeName = function (name) {
    this.lastname = surname;
}
newname.changename("Azad");
console.log(newname.lastname);


new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object

