class Vehicle {
    constructor(numWheels,price){
        this.numWheels = numWheels;
        this.price = price;
    }

    getPrice(){
        return this.price;
    }
    printDescription(){
        console.log("Vehicle ", this.numWheels,this.price);
    }
}

class Car extends Vehicle{
    constructor(price,numDoors){
        super(4,price);
        this.numDoors = numDoors;
    }
    printDescription(){
        console.log("Car ");
    }
}
var c = new Car(40000,4);
console.log(c);
console.log(c.printDescription());