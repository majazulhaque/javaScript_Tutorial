var student = {
  name: "abc",
  rollNo: 135,
  marks: 90,
}; // key:value mapping(all the key is string)
console.log(student);
student.marks = 100;
console.log(student)
student.sem // undefined instead of error
student.sem = 5; // at any time we can add property to object
console.log(student); 