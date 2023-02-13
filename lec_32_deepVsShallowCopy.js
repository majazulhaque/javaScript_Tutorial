// Deep Copy -> it means that value is copied to the new variable and does not connected to the original variable.
// Shallow Copy -> it means that value is copied to the new variable but still connected to the original variable.

const a = 4;
const b = a;
let c = a;
c = 10;

console.log(a,b,c);


var susan = {
    name: "susan",
    age: 30
};

/*
var raj = susan;
raj.age = 45;
console.log(susan);
console.log(raj);
*/

var raj = {...susan}; // using spread operator, deep copy of object can be done.
// var virat = Object.assign({},susan); // also can be used.

raj.name = "raj";


console.log(susan);
console.log(raj);

                                          /* ARRAY */
var arr = [1,3,4,5];

// var arr2 = [...arr]; // deep copy.
var arr2 = arr.map(el => el); // deep copy.
arr2.push(23);
console.log(arr);
console.log(arr2);
