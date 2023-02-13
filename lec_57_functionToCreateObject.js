/*
var student1 = {
    name: "abc",
    rollNo: 10,
    marks:80
};
var student2 = {
    name: "xyz",
    rollNo: 20,
    marks:90
};
console.log(student1,student2); // it is difficult to write number of object like this.
*/

function createStudent(name,rollNo,marks) {
    var student = {};
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    return student;
}
var student1 = createStudent("abcd",10,80);
var student2 = createStudent("pqrs",30,67);
console.log(student1);