var arr = [1,2,3,4,5];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let i of arr){  // same output but this method is browser dependend. Make sure compatibility before use.
    console.log(i);
}