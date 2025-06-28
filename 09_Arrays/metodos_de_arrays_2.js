
// Otros metodos de arrays:

const numeros = [1,3,4,543,673,87,4,75,43,874,4,8.555555,4,4,3,2.333333];
const arregloAnidado = [4,42,65,23,[34,54,[99,100],65,76,4],2,4,[45,2]];


// .filter()    = Crea un nuevo arreglo con los elementos que cumplan una condición.
console.log( numeros.filter( numero => numero>10) );

// .reduce()    = Reduce el array a un solo valor aplicando una funcion acumuladora
const suma = numeros.reduce((acum, actual) => acum + actual, 0);
console.log( suma );

// .length      = Da la longitud del array
const cantidad = numeros.length;
console.log(cantidad);

// .round()     = Redondea un número al entero inmed. superior.
const redondeoArriba = Math.round(suma / cantidad);
console.log( redondeoArriba );

// .floor()     = Redondeo al entero inmed. inferior.
const redondeoAbajo = Math.floor((suma/cantidad), 3);
console.log(redondeoAbajo);

// .toFixed()   = Coloca el número de decimales deseados.
const conDecimales = (suma/cantidad).toFixed(2)
console.log( conDecimales );

// .map()       = Crea un nuevo arreglo con los resultados de aplicar una función a cada elemento.
const dobles = numeros.map(num => num *2);
console.log(dobles);

// .some()      = Devuelve `true` si al menos un elemento cumple una condición.
console.log( numeros.some(num => num > 100) );  // del array, algun numero es mayor a 100?

// .every()     =  Devuelve `true` si todos los elementos cumplen una condición.
console.log( numeros.every(num => num > 100) ); // del array, todos los numeros son mayores a 100?

// .find()      = Devuelve el primer elemento que cumple una condición. Si ninguno cumple, retorna undefined
let encontrado = numeros.find( num => num > 800 );
console.log( encontrado );

// .findIndex()     = Devuelve el índice del primer elemento que cumple una condición
let indiceEncontrado = numeros.findIndex( n => n > 600 );
console.log( indiceEncontrado );
console.log( numeros[indiceEncontrado] );


// .includes()      = Verifica si un valor esta o no en el arreglo.
//  array.includes(valorBuscado[, desdeIndice]);
let incluye_5 = numeros.includes(5);
console.log( incluye_5 );       // incluye el 5?

let incuye_87 = numeros.includes(87, 6);    // incluye el 87, empezando a contar desde el indice 6?
console.log( incuye_87 );   // false

let incuye_87_2 = numeros.includes(87, 5);      // incluye el 87, empezando a contar desde el indice 5?
console.log( incuye_87_2 );     // true


// .indexOf()       = Devuelve el índice de la primera aparición de un valor.
let indiceDe_4 = numeros.indexOf(4);
console.log( indiceDe_4 );      // en el indice 2.

let indice_4_desde_10 = numeros.indexOf(4, 9);      // dame el indice de 4, contando desde el indice 9
console.log( indice_4_desde_10 );       // en el indice 10


// .lastIndexOf()       = Devuelve el índice de la última aparición de un valor
let ultimoIndice = numeros.lastIndexOf( 4 );    // en el indice 13
console.log( ultimoIndice );


// .join()      = Une todos los elementos en una cadena
let numerosCadena_1 = numeros.join();   // los separa por defecto con comas, pero en texto
let numerosCadena_2 = numeros.join("-");    // los separa por un "-"
console.log(numerosCadena_1);
console.log(numerosCadena_2);


// .flat()      =  Aplana arreglos anidados solo de primer nivel de anidacion
let arregloAplanado = arregloAnidado.flat();
let arregloAplanado_2do_nivel = arregloAnidado.flat(2);
console.log( arregloAnidado );

console.log( arregloAplanado );     // elimina los arrays internos menos el [99,100] por que es de 2do nivel
console.log( arregloAplanado_2do_nivel );   // para aplanarlo en 2do nivel debemos poner el 2 como parametro.


// .flatMap()       = Aplica una función y aplana el resultado.
const numeros_Arreglo = [1, 2, 3];

const resultado = numeros_Arreglo.flatMap(num => [num, num * 2]);

console.log(resultado); // [1, 2, 2, 4, 3, 6]




