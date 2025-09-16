//User Input
//  Ask the user for their age using prompt() and display:
// "You are an adult" if age ≥ 18
// "You are a minor" otherwise
let age;

age = Number(prompt("Enter your age: "));
if (age>=18){
    console.log("You are an adult");
}
else{
    console.log("You are a minor");
}