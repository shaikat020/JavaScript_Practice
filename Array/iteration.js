// The forEach() method calls a function (a callback function) once for each array element.

const num=[45, 4, 9, 16, 25];
let txt = "";

num.forEach(myArray);

function myArray(value, index, array){
    txt+=value+"--> "+ index + "\n";
}

console.log(txt);

// map()

const num1=[45, 4, 9, 16, 25];
const num2= num1.map(mapp);//x=>x*2

function mapp(value, index, array){
    return value*2
}

console.log(num2);

//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const num3=num1.flatMap(x=>[x, x*10]);
console.log(num3)

const filt_num = num1.filter(x=>x>18);

//alternative
// const over18 = numbers.filter(myFunction);
// function myFunction(value) {
//   return value > 18;
// }

console.log(filt_num);

//Reduce
const numbers = [45, 34, 39, 61, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
console.log(sum);

//The every() method checks if all array values pass a test.
let all18 = numbers.every(x=>x>18);
console.log(all18)
//Alternative

// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }


// some()
all18 = numbers.some(x=>x>18);
console.log(all18)


//from(): The Array.from() method returns an Array object from:
// Any iterable object
// Any object with a length property
let names="Shaikat"
console.log(Array.from(names));


//keys()
const fruits = {
    "Banana" : "Kola",
    "Orange" : "Komola", 
    "Apple" : "Apel", 
    "Mango" : "Am"
}
const keys = Object.keys(fruits);

let text = "";
for (let x of keys) {
  text += x + "\n";
}
console.log(text)


const fruit = ["Banana", "Orange", "Apple", "Mango"];
// const key = Object.keys(fruit);

// let texts = "";
// for (let x of keys) {
//   texts += x + "\n";
// }
// console.log(texts);

//entries(): Create an Array Iterator, and then iterate over the key/value pairs

const f = fruit.entries();

for (let x of f) {
  console.log(x, "\n");
}

//with() method: update elements in an array without altering the original array.
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);

//The ... operator expands an array into individual elements.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

//The spread operator (...) can be used to copy an array:
const arr4 = [1, 2, 3];
const arr5 = [...arr4];
console.log(arr5);

//Spread operator can be used to pass arguments
const mark=[40,50,45, 70,60];
console.log(Math.max(...mark));
console.log(Math.min(...mark));


//The rest operator (...) allows us to destruct an array and collect the leftovers:
let a, b, rest;
const arr6 = [1,2,3,4,5,6,7,8];

[a, b, ...rest] = arr6;

console.log(rest);