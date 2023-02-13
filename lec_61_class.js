/*
class Vehicle {
    constructor(numwheels,price){
        this.numwheels = numwheels;
        this.price = price;
    }
    getPrice(){             // getPrice is not in object but in prototype.
        return this.price;
    }
}
*/

var Vehicle = class {                // class expression
    constructor(numwheels,price){
        this.numwheels = numwheels;
        this.price = price;
    }
    getPrice(){             // getPrice is not in object but in prototype.
        return this.price;
    }
}

var vehicle1 = new Vehicle(3,5000000); // cant call class without new keyword.
var vehicle2 = new Vehicle(5,23000);

//class function is not hoisted, it place error if we call before constructor.
