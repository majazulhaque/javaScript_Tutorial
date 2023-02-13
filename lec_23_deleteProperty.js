var student = {
    "name" : "abc",
    rollNo : 135,
    marks : 90,
    "2" : "two"
};
console.log(student);
delete student.marks;
console.log(student);
delete student["2"];
console.log(student);
