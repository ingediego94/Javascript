// Métodos de Strings

// a) .toUpperCase() / .toLowerCase()
// Convierte a mayúsculas o minúsculas.
let saludo = "Hola";
console.log(saludo.toUpperCase()); // "HOLA"


// b) .includes()
// Verifica si una cadena contiene otra.
let frase = "Me gusta el café";
console.log(frase.includes("café")); // true


// c) .split()
// Convierte un string en array usando un separador.
let texto = "rojo,verde,azul";
let colores = texto.split(",");
console.log(colores); // ["rojo", "verde", "azul"]


// d) .replace()
// Reemplaza parte de un string por otro.
let mensaje = "Hola mundo, vamos a hacer un cambio";
let nuevo = mensaje.replace("mundo", "Diego");
console.log(nuevo); // "Hola Diego, vamos a hacer un cambio"





