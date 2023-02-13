// Hoisting is the method in javaScript which move every varible scope to the top of the code.


console.log(j); // undefined

hoistDemo(); // function hoisting

function hoistDemo(){
    console.log(i); // undefined because of Hoisting
    var i = 10;
}

// hoistDemo();

var j = 10; //variable hoisting