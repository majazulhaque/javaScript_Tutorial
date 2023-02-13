/*
var i  = 10;
function outer(){
    var j  = 20;
    console.log(i, j);
    var inner = function(){
        var k = 30;
        console.log(j,k);
    }
    return inner;
}
var inner = outer();
inner(); 
*/           // value of j is stored because of closures.







// CLOSURES --> function + lexical env. in which function was created.
/*
var i  = 10;
function outer(){
    var j  = 20;
    console.log(i, j);
    var inner = function(){
        var k = 30;
        console.log(j,k);
        j++;            // value of j is increased because it is outer scope.
        k++;
    }
    return inner;
}
var inner = outer();
inner();     // both the inner function created new lexical env. with new k variable so, it will print similar result.
inner();     // after each function call lexical env. is destroyed.
*/



var i  = 10;
function outer(){
    var j  = 20;
    console.log(i, j);
    var inner = function(){
        var k = 30;
        console.log(j,k);
        i++;
        j++;           
        k++;
    }
    return inner;
}
var inner = outer();
inner();   
inner = outer();  // It create new lexical env. having j = 20 and i = 11.
inner(); 