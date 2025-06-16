
let nombre = 'Carlos';              // Tipo string
let edad = 57;                      //Tipo number
let precio = 3.1416;                // Tipo number
let bigInt = 23423482309420983209423n  //Tipo BigInt, para numeros exageradamente grandes, se pone una 'n' al final
let esBooleano = false;             // Tipo Boolean
let esNulo = null;                  // Null
let lista = [99, 'Camilo', true];   // Tipo lista
let producto = {tipo: 'Pantalon', cantidad: 27};    //Tipo objeto
let fecha = new Date("1994-03-04");                 // Tipo objeto
let noDefinido;                     // Tipo de dato undefined


console.log("Hola" + nombre);
console.log(edad);
console.log(precio);
console.log(bigInt);
console.log(esBooleano);
console.log(esNulo);


console.log(lista);
console.log(lista[0]);      // Accede al 1er elemento de la lista


console.log(producto);
console.log(producto.cantidad);     //Accede al valor de la clave 'cantidad'

console.log(typeof noDefinido);     //a variable without a value, has the value undefined. The type is also undefined.


// JavaScript Types are Dynamic
// Therefore, the same variable can be used to hold different data types

let mom;    // Now mom is undefined.
mom = 5;    // Now mom is a Numbrer
x = 'Jhon'; //Now mom is a String.