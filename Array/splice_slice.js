const arr=["rest", "api", "soap"];
arr.splice(2, 0, "restful", "flask", "spring", "node");
console.log(arr);

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters  define the new elements to be added.

// The splice() method returns an array with the deleted items:



// can use splice() to remove elements without leaving "holes" in the array:/
arr.splice(4, 2);
console.log(arr);

//Array toSpliced() method as a safe way to splice an array without altering the original array.
const arr2= arr.toSpliced(2,1);
console.log(arr2);


//slice: The slice() method slices out a piece of an array into a new array

const arr3 = arr.slice(2);//Slice out a part of an array starting from array element 2
console.log(arr3);
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.


//The slice() method can take two arguments. The method then selects elements from the start argument, and up to (but not including) the end argument.

const sl= arr.slice(1,3);
console.log(sl);