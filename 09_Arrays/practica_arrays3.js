
let array_2 = [];

array_2[0] = 40;
console.log( array_2 );

array_2[1] = 34;
console.log( array_2 );


// push()
array_2.push(3);                // Agrega un elemento al final del array
console.log( array_2 );

console.log( array_2[2] );


//  pop()
array_2[3] = 'Daniela';
let primero = array_2.pop();     // elimina el ultimo elemento y lo devuelve
console.log( primero );

console.log(array_2);


// shift()
let segundo = array_2.shift();      // Elimina el primer elemento del array
console.log( segundo );

console.log( array_2 );


// unshift()
array_2.unshift("Diego", "Vallejo", 29);    // Agrega varios elementos al inicio del array
console.log( array_2 );


// length
console.log( array_2.length );      // conocer la longitud del array


// slice()
let nuevoArray = array_2.slice(0,3);        // Crea una copia de una parte del array {toma hasta n-1}
console.log( nuevoArray );


// splice()
let array_borrar = [1, 2, 3, 4, 5, 6, 7];
console.log( array_borrar );

array_borrar.splice(2,4);               // Desde la posición 2 cuenta 4 elementos y lo borra.
console.log( array_borrar );


// splice 2
array_borrar.push(8, 9, 10, 55)         // Desde la posicion 1 borra 2 elmentos y allí añade a "elemento"
array_borrar.splice(1, 2, "elemento");
console.log( array_borrar );
