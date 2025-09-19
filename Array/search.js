//The indexOf() method searches an array for an element value and returns its position

const skill = ["HTML", "CSS", "JavaScript", "Python", "HTML", "Python", "Django"];
let position=skill.indexOf("Python")+1;
console.log(position);

//last indexof: returns the position of the last occurrence of the specified element.

position=skill.lastIndexOf("Python")+1;
console.log(position);

// array.indexOf(item, start)

console.log(skill.includes("JavaScript"));

// find

const x= [5, 6, 10, 18, 22, 30,17];

let f= x.find(myfindfun);
function myfindfun(value, index, array)
{
    return value>18;
}
console.log("First number over 18 is ", f); 

//findIndex(myfindfun)
let i= x.findIndex(myfindfun);

console.log("Index is", i);

//findLast(myfindfun)

let l= x.findLast(x=>x>18);

console.log("Last greater than 18 is :",l);

let li= x.findLastIndex(x=> x>18);
console.log("Index is :", li);