function Vehicle(numWheels, price){
    this.numWheels = numWheels;
    this.price = price;
    // this.getPrice = function(){  
    //     return this.price;
    // }
}
Vehicle.prototype.getPrice = function(){
    return this.price;
}
Vehicle.prototype.color = "black";

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4,400000);

// Vehicle.prototype;
// Vehicle.prototype.constructor;
Object.getPrototypeOf(vehicle1); // this is equal to Vehicle.prototype.
Vehicle.prototype.isPrototypeOf(vehicle1); // true.
vehicle1.hasOwnProperty('price'); // true.
vehicle1.hasOwnProperty('getPrice'); // false.
vehicle1.color = "white"; // add property in object not in protytype.
vehicle1.hasOwnProperty('color'); // true;
