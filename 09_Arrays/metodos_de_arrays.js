

// .PUSH(): Agrega uno o más elementos al final del array.

let frutas = ["manzana", "pera"];
frutas.push("naranja");
console.log(frutas); // ["manzana", "pera", "naranja"]

// .POP(): Elimina el último elemento del array.
let frutas1 = ["manzana", "pera"];
frutas1.pop();
console.log(frutas1); // ["manzana"]

// .MAP(): Crea un nuevo array con los resultados de aplicar una función a cada elemento.
let numeros = [1, 2, 3];
let alCuadrado = numeros.map(n => n * n);
console.log(alCuadrado); // [1, 4, 9]

// .FILTER(): Crea un nuevo array con los elementos que cumplan una condición.
let edades = [12, 18, 22, 15];
let mayores = edades.filter(edad => edad >= 18);
console.log(mayores); // [18, 22]


// .FILTER(): Ejecuta una función por cada elemento (no devuelve array).
let nombres = ["Ana", "Luis", "Carlos"];
nombres.forEach(nombre => console.log("Hola " + nombre));
