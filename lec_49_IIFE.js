/*
function print(){
    var a = 10;
    setTimeout(function(){
        console.log(a);
    },1000);
}
print();

function print2(){
    var a = 20;
    console.log(a);
}
print2();
*/

(function(){   //IIFE(Imediately Invoked Function Expression)
    var a = 10;
    setTimeout(function(){
        console.log(a);
    },1000);
})();

(function(){
    var a = 20;
    console.log(a);
})();