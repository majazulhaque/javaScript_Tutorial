
var name = "scope"; // Global scope 
console.log(name);

function scopeDemo(){
    var i = 20; // Function scope
    console.log(i);
}

scopeDemo();
// console.log(i); // error





/*****************************************/ 

var name1  = "global";

function scopeDemo1(){
    var name1 = "function";
    console.log(name1);
}
scopeDemo1();
console.log(name1);





/* *************Execution context****************
global ===
          variable environment,this 

function === (function execution context is only created when function is called)
            variable
            this
            reference to the outer environment
*/

function c(){
    console.log("Inside c");
}
function b(){
    c();
    console.log("Inside b");
}
function a(){
    b();
    console.log("Inside a");
}
a();
console.log("Global content")






