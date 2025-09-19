const arr=["rest", "api", "soap", "restful", "flask", "spring", "node"];
//The sort() method sorts an array alphabetically
arr.sort();
console.log(arr);

// Reverse(): Reverse the element 
// Combining sort and reverse will result descending

arr.reverse();
console.log(arr);

//toSorted() is for sorting without altering the original array

const arr2=["rest", "api", "soap", "restful", "flask", "spring", "node"];

const arr3 = arr2.toSorted();
console.log("Arr2 :", arr2,"\nArr3:", arr3);

//toReversed() also reverse element keeping the original array and altering in other variable

const rev = arr3.toReversed();
console.log(rev)

// sort() is basically for string. SO it will be like 25 is greater than 100. To solve this, have to use compare function

const num= [100, 25,20,1,23, 33, 37, 20, 67];
console.log(num.sort((a,b)=> (a-b)));// (a,b)=> (a-b) === function(a, b){return a - b}
console.log(num.sort((a,b)=> (b-a)));// descending

//Sorting an Array in Random Order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
console.log(points);

//Fisher Yates Method
const points2 = [40, 100, 1, 5, 25, 10];

for (let i=points2.length; i>0; i--)
{
    let j= Math.floor(Math.random()*(i+1));
    let k= points2[i];
    points2[i]=points2[j];
    points2[j]=k;
}

console.log(points2);


function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(myArrayMax(points));

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

cars.sort(function(a, b){return a.year - b.year});
console.log(cars);

cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});

console.log(cars);