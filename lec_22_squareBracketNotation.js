var student = {
    name : "abc",
    rollNo : 145,
    marks : 90,
};
var obj = {};
var obj = new Object();
console.log(student.marks); // to access the value using key
console.log(student["marks"]); // to access the value using key

// if key is starting with -name or number like 2,then only bracket notation is used to access the value otherwise it says error.

function printProperty(obj,prop){
    console.log(obj[prop]);
}
printProperty(student, "rollNo");