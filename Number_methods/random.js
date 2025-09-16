console.log(Math.random());// Print between 0 to below 1
console.log(Math.random()*10); //0 to 9
console.log(Math.random()*11); //0 to 10
console.log(Math.random()*100); //0 to 99

console.log(Math.floor(Math.random()*10));// integer 0 to 9
console.log(Math.floor(Math.random()*10)+1);// integer 1 to 10

function random_integer_range(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}
console.log(random_integer_range(10,100));