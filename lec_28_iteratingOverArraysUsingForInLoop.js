var arr = [20,30,40,50];
arr.prop1 = "demo";
console.log(arr);
console.log(arr.length); // length is not changed if add property because length is the maximum purely integral value + 1.

var obj = {
    "0": 20,
    "1": 30,
    "2": 40,
    "3": 50
}

obj.prop1 = "demo";
console.log(obj);
for(var i in arr){
    console.log(i); // this loop also iterate the addition property of the array.
}  