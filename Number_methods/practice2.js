// Check integer, NaN
x=10;
y=10.5;
z=NaN;
console.log(Number.isInteger(x), Number.isFinite(x));
console.log(Number.isNaN(z));
// ---- Number.isSafeInteger ----
//Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).
console.log(Number.isSafeInteger(10));                  // true
console.log(Number.isSafeInteger(10.5));                // false
console.log(Number.isSafeInteger(9007199254740992));    // false (too large!)
