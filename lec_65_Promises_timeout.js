console.log(1);

setTimeout(function(){
    console.log(2);

},0);
var promise = new Promise(function(resolve,reject){
    resolve(3);
});

promise.then(function (data){
    console.log(data);
});

console.log(4);  // 1 4 3 2 again even 0 time.

//setTimeout is not a js function but it is a language function
/*
****************CALL STACK*******************          
console.log(3)                              *
setTimeout() // start a timer in browser.   *
console.log(1)                              *
global()                                    *
*********************************************

**********BROWSER************
*                            *
*      setTimeout(cb,time)   *
*                            *
* start timer like 0,100,1000*
*                            *
*                            *
*        timer end ??        *
*                            *
* ****************************

*********TASK QUEUE(CALLBACK QUEUE)**********
(cb),
******************EVENT LOOP*****************  check the call stack is empty or not ?
First function goes to the browser where timer is run and once the timer is over 
it moves into the queue and continuesly event loop check where the call stack is
empty or not, once the call stack is empty, the function dequeue from front of the 
queue and move to the call stack for further execution.

if any promises is available, it moves into MICRO TASK QUEUE, and dequeue prior tot
the task queue.
*/