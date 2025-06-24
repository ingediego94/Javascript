
let numbers = [1,2,3,5];
console.log(numbers);


let num_1 = numbers.pop();    // Elimina el 5 del array y lo guarda en otra variable
console.log(num_1);


numbers.push(4);    // Agrega el 4 al final del array


let doubled = numbers.map(num => num * 2);  // crea un nuevo array con el doble de valor
console.log(doubled);


let mayores = doubled.filter(num => num > 5);  // Crea un nuevo array bajo filtro 
console.log(mayores);

