/*
function Student(name,rollNo,marks) {
    // var student = {};
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
    // return student;
}
var student1 = new Student("abcd",10,80);
var student2 = new Student("pqrs",30,67);
console.log(student1);
*/

function Vehicle(numWheels, price){
    this.numWheels = numWheels;
    this.price = price;
    this.getPrice = function(){  // this function is not created only once like in java or c++ but create as same number as the object is created.
        return this.price;
    }
}

var Vehicle1 = new Vehicle(2, 50000);
var Vehicle2 = new Vehicle(4,400000);

