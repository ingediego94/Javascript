
const array = [1,2,3];
console.log(array);

array[3]= 4;
console.log(array);

array.push(5);
console.log(array);

array.unshift(-2, -1, 0);
console.log(array);

let numero = array.pop();
console.log(array);
console.log(numero);

let numero2 = array.shift();
console.log(numero2);

console.log(array.length);

array.unshift(23, true, "diego", 34.5, false);
console.log(array);


array.splice(3,4, "FOUR LOKO");
console.log(array);

