const fruits= ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length]= "Pineapple";// Can add by its length
console.log(fruits);

delete fruits[2];//Not recommended as it will create an undefined hole

console.log(fruits);
//Use pop or shift instead

console.log(fruits.pop());
console.log(fruits);