/** (Rule-1) ================ NEW KEYWORK ================== */
/*
function Vehicle(name){
    this.name = name;
    console.log(this);
}

 new Vehicle("Car");
 */

/*
What happen when we call with new object ?
   it will create new object {}.
   it will link this new object with other object that is prototype object.
   the new object will call Vehicle object with this new object value like vehicle.call({}).
   if the function is not returning anything, it will return new empty object.

*/ 








/* (Rule-2) ======== EXPLICIT BINDING RULE ========== */
/*
const john = {
    name : 'John',
};
function ask(){
    console.log(this,this.name);
}
*/

// ask();  // Print window object because in global context.

// ask.call(john);   // Print John too.

// ask.apply(john);  // same as ask.call.




/**  HARD BINDING RULE */
/*
var raj = {
    name: 'Raj',
    greet: function(){
        console.log('Hello', this);
    }
};
*/

// raj.greet();  // Print raj object. but if we use this in setTimeout function it will print window object instead of raj object.

/*
var localAsk = raj.greet; // Print Hello and window object.
console.log(localAsk());
*/

/*
var localGreet = raj.greet.bind(raj);
console.log(localGreet());    // Print Hello and raj object. This function does not break in setTimeout function.
*/




/** (Rule-3) ================== IMPLICIT BINDING ================ */
/*
var raj = {
    name: 'Raj',
    greet: function(){
        console.log('Hello', this);
    }
};

// raj.greet();  // implicit binding- because we call the greet function on raj.

var localAskFunc = raj.greet;

// localAskFunc // print the greet function.

localAskFunc();  // Hello and window object.
*/


/** (Rule -4) ============== DEFAULT BINDING ======================= */
/*
function ask(){
    console.log(this,this.name);
}

ask();  // print window object.
*/


/** EXTRA CODE */
/*
var person = {
    name: 'John',
    ask: function(){
        console.log(this);
    }
};

new (person.ask.bind(person))(); // return ask{} (empty)
*/