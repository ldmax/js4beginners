/*
 every operator will return a value;
 prefix increment and postfix increment will also return a value;
 prefix will return new value; postfix will return old value
 */

let counter = 1;
let res = ++counter;
console.log(res);    // 2
console.log(counter);    // 2


counter = 3;
res = counter++;
console.log(counter);  // 4
console.log(res);  // 3
