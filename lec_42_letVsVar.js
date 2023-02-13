for(var i = 1; i <= 5; i++){ // Print 6 6 6 6 6 because of global variable
    setTimeout(function(){
        console.log(i);
    },1000);
}

for(let i = 1; i <= 5; i++){  // Print 1 2 3 4 5 because of block scope
    setTimeout(function(){
        console.log(i);
    },1000);
}