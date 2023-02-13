function outer(){
    var outerVar = 10;
    function inner(){
        var innerVar = 100;
        console.log(outerVar);
    }
    inner();
    // console.log(innerVar);  // scope error
}
// inner();  // error function scope
outer();

/* ***************************** */

var name = "global";

function outer1(){
    var name = "outer";
    function inner1(){
        var name = "inner";
        console.log(name);
    }
    inner1();
    console.log(name);
}
outer1();
console.log(name);