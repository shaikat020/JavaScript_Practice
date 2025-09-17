// Set year

const d = new Date("January 01, 2025");
d.setFullYear(2020);
console.log(d);


//The setFullYear() method can optionally set month and day:
d.setFullYear(2020, 11, 3);
console.log(d);

//Set hours
d.setHours(22);
console.log(d);
