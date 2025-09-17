const d= new Date("2015-03-25");
console.log(d);//ISO
console.log(new Date("2015"));
console.log("With time: ");
console.log(new Date("2015-01-25T20:08:50-06:00"));

console.log(new Date("03/25/2015"));

console.log(Date.parse("2025 Sep 17"));

console.log(new Date());

// getFullYear()	Get year as a four digit number (yyyy)
// getMonth()	Get month as a number (0-11)
// getDate()	Get day as a number (1-31)
// getDay()	Get weekday as a number (0-6)
// getHours()	Get hour (0-23)
// getMinutes()	Get minute (0-59)
// getSeconds()	Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	Get time (milliseconds since January 1, 1970)

console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());

const t=new Date();
console.log(t.getSeconds());
console.log(t.getMilliseconds());
// month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const u = new Date();
let month = months[u.getMonth()];
console.log(month);


console.log(t.getMinutes());