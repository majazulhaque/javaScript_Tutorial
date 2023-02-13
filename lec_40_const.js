var a;
console.log(a);  // undefined
a = 20;

console.log(a);
// const c;  // can't do
const c = 40;
// c = 50;  // can't be changed

console.log(d); //undefined because of hoisting
var d = 10;

console.log(e);  // can't do, hoisting does not work
const e = 10;

