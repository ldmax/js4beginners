/*
 `=` is also and operator and its affect is returning a value
 */

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

console.log(a);
console.log(c);
