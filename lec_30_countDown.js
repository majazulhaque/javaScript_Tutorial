var count = 10;
function timer(){
    if(count == 0){
        console.log("Time up!!!");
        clearInterval(stop);
        return;
    }
    console.log(count);
    count--;
   
}
var stop = setInterval(timer,1000);