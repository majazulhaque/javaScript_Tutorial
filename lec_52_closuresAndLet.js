/*
for(var i = 1; i <= 5; i++){
    setTimeout(function(){
        console.log(i);   // bound to the outer scope to print 6 only.
    },1000);
}
console.log("After for loop ", i);
*/


/*
function test(){
    for(var i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);   // bound to the test scope to print 6 only.
        },1000);
    }
    console.log("After for loop ", i);    
}

test();
*/

function test(){
    for(let i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i); 
        },1000);
    }
    // console.log("After for loop ", i);    
}

test();

