var obj = {
    "pi" : 10
};
var obj2 = obj; // referring to the obj(if changes, changes reflect to both obj because referring to the same location)

console.log(obj == obj2) // true
console.log(obj === obj2) // true


obj2 = {
    "pi": 10
};
console.log(obj == obj2) // false
console.log(obj === obj2 )// false