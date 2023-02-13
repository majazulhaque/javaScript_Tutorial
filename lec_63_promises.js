// Three state -> Pending, fullfilled, rejected.

var promise = new Promise((resolve,reject) => {
    // resolve("Yay promise fulfilled!");
    // reject("Something went wrong");
    setTimeout(() => {
        // resolve({message: 'success'});
        reject({message: 'error'});
    },3000);
});
// console.log(promise);  // pending state.
console.log(promise.then((data) =>{
    console.log(data);
}).catch((error) => {
    console.log('error',error);
}));