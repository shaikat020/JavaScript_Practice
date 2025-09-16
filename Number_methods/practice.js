let x= 9.56;
//fixed method
console.log(x.toFixed(0));
console.log(x.toFixed(3));

// Precision method
console.log(x.toPrecision(4));

// Value of
console.log(x.valueOf());

console.log(("123".valueOf()));

// NaN

console.log(Number("Shaikat"));

//Date to number(ms)

let d = new Date("2017-09-30");
console.log(Number(d));

//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned

console.log(parseInt("   -20"));
console.log(parseInt("years 10"));

//parseFloat()  parses a string and returns a number. Spaces are allowed. Only the first number is returned
console.log(parseFloat("10"));

