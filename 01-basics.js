"use strict";
// console.log("Hello World!")
let userName = "Embrie";
let userAge = 22;
// ...
userAge = 22;
console.log(`Username - ${userName}`);
console.log(`Age - ${userAge}`);
function add(a, b = 5) {
    return a + b;
}
add(10);
// add('10')
add(10, 6);
// add(10, '6')
