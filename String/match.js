let text = "The rain in SPAIN stays mainly in the plain";
const myArr=text.match(/ain/g);

console.log(myArr);
console.log(text.match(/ain/));
console.log(text.match(/ain/ig));