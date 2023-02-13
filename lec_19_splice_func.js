var arr = [2,4,6,8,35];
console.log(arr);

arr.splice(1,1); // delete 1 element at index 1;
console.log(arr);

arr.splice(1); // delete after 1 element
console.log(arr);

arr = [2,3,7,31,8,79];
console.log(arr);

arr.splice(2,0,10); // insert element
console.log(arr);

arr.splice(2,0,10,20,30); // insert number of element
console.log(arr);

arr.splice(2,3,40,50); // insertion and deletion both together
console.log(arr);