/*
(function(){                   // IIFE
    var fileName = "File1";

    setTimeout(function(){
        console.log(fileName);
    },1000);
})();
*/

{
    let fileName = "File1";        // let from Es6 onward
    setTimeout(function(){
        console.log(fileName);
    },1000);
}