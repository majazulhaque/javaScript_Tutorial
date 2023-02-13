// var arr = [1,3,4,5,6];
var arr = new Array(1,3,5,6,7);

arr.length;
arr[6] // undefined instead of error(property of javascript)
arr[2] // 3
arr[7] = 100;
for(var i  = 0;i < arr.length; i++){
    console.log(arr[i]);
}
// Those having no value print undefined value instead of error

var arr = new Array(); // empty array
console.log(arr);
var arr = new Array(2); // size of array 2;
console.log(arr);
var arr = new Array(2,3); // 2,3 are the value of array
console.log(arr);
