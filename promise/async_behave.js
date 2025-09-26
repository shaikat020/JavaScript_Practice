//In the real world, callbacks are most often used with asynchronous functions.
//A typical example is JavaScript setTimeout().
//When you pass a function as an argument, remember not to use parenthesis.
// Right: setTimeout(myFunction, 3000);
// Wrong: setTimeout(myFunction(), 3000);

console.log("Hi");
setTimeout(function() {
    console.log("Hello its me shaikat");
}, 2000);

console.log("How are you?");

//priority: First sychronous then asynchronous


//Waiting for Intervals:
// When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval
function time(){
    let t= new Date();
    console.log(t.getHours()+":"+t.getMinutes()+ ":"+t.getSeconds());
}

setInterval(time, 1000);
