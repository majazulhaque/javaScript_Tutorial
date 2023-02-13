
function sayHello(){
    console.log("Hello");
}
var sec = 1;
function sayAfter(){
    console.log("After", sec);
    sec++;
    if(sec === 6){
        clearInterval(id);
    }
}
// setTimeout(sayHello, 1000);

/*
setTimeout(function sayHello(){
    console.log("Hello");
},3000);
*/

var id = setInterval(sayAfter, 1000);