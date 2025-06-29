
// Foreach
// es una funcion que nos sirve para ejecutar bucles asociados
// a elementos iterables
const myArray = [1,2,3,4,5];

// nos da la capacidad de iterar sobre un array

// Eso es lo mismo que la siguiente func. flecha
myArray.forEach(function (valor) {
    console.log( valor );
})
console.log("------------------------------------------");

// Es lo mismo que la anterior funcion
myArray.forEach((valor) => console.log(valor));

console.log("------------------------------------------");
myMap = new Map([
    ['Brais', 'Moure'],
    ['email','mouredev@gmail.com'],
    ['age',35]
]);

myMap.forEach((value) => console.log(value));