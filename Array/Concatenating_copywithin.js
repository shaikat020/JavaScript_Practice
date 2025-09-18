const myhobby=["Gardening", "Gaming", "Sleeping", "Watching reels"];
const member=["Father", "Mother", "Brother", "Sister-in-law", "Niece", "My-Future-wife(Still Unmarried 😔)"];
const part=myhobby.concat(member);// concatenating two array
console.log(part);

// Concatenating 3 arrays
const skill= ["HTML", "CSS", "JavaScript", "Python", "Django", "MySQL", "PGSQL", "C", "C++", "Linux"];

const quad= myhobby.concat(member, skill);
console.log(quad);

//Copywithin: The copyWithin() method overwrites the existing values.

const fruit=["Banana", "Mango", "Apple", "Blackberry","Pine Apple"];
fruit.copyWithin(2,0);
console.log(fruit);

fruit.copyWithin(2, 0, 3);
console.log(fruit);

//Flat
const myArr = [1,2,[3,4],[5,6]];
const newArr= myArr.flat();
console.log(newArr);

//flat map
const new2arr=newArr.flatMap(x=>[x, x+2]);

console.log(new2arr);