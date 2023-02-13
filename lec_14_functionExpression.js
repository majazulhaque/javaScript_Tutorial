var factorial = function fact(n){  // Named function expression
    var ans = 1;
    for(var i  = 1; i <= n; i++){
    ans = ans *i;
    }
    // fact() can be used here if recursion is used
    return ans;
};
// console.log(fact(4));  // cannot be used fact() here.
console.log(factorial); // print function fact();
console.log(factorial(5)); // print value 

/* ************************************* */

var factorial2 = function (n){  // Anonymous function expression
    var ans = 1;
    for(var i  = 1; i <= n; i++){
    ans = ans *i;
    }
    return ans;
};

console.log(factorial2); // print factorial2(n);
console.log(factorial2(6));