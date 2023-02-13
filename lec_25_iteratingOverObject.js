var student = {
    "name": "abc",
    rollNo : 160,
    marks : 90,
    "2" : "two"
};


/* METHOD 1 */
/*
for(var prop in student){
    console.log(prop, student[prop]);
}
*/


/* METHOD 2 */
/*
var keys = Object.keys(student);
console.log(keys);
var values = Object.values(student);
console.log(values);
*/



/* METHOD 3 */
/*
var keys = Object.getOwnPropertyNames(student);
console.log(keys);
*/