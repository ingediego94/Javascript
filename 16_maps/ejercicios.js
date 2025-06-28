// 1. Crea un array que almacene cinco animales.

const animales = ['perro', 'gato', 'caballo', 'ganso', 'elefante'];
console.log( animales );


// 2. Añade dos mas. Uno al principio y otro al final
animales.unshift('cuy');
animales.push('ratón');
console.log( animales );


// 3. Elimina el que se encuentra en la 3ra posición
animales.splice(2,1);
console.log( animales );


// 4. Crea un set que almacene 5 libros
let libros = new Set([
    'Cien años de soledad',
    'Harry Potter',
    'Narnia', 
    'Objetivo 4',
    'El arte de la guerra'
]);

console.log( libros );


// 5. Añade dos mas, uno de ellos repetido.
libros.add('Scouting for boys').add('Objetivo 4').add('MBA personal');
console.log( libros );      // no se agrega Obejtivo 4


// 6. Elimina uno concreto a tu eleccion
libros.delete('Cien años de soledad');
console.log( libros );


// 7. Crea un mapa que asocie el nomero del mes a su nombre.
const meses = new Map([
    [3, 'marzo'],
    [5 , 'abril'],
    [11, 'noviembre']
]);
console.log( meses );


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log( meses.has(5) );
console.log( meses.get(5) );


// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set(6 , 'junio').set(7 , 'julio').set(8 , 'agosto');
console.log( meses );


// 10. Crea un array, transformalo a un Set y almacenalo en un Map.
const productos = ['mouse', 'teclado', 'pc', 'monitor', 'pc'];
const productos_2 = [['mouse',2], ['teclado' , 5], ['pc' , 8], ['monitor', 4], ['pc',1]];
console.log( productos );

    // conversion a set
const setProductos = new Set(productos);
console.log( setProductos );

    // conversion a map
const mapProductos = new Map(productos_2);
console.log(productos_2);
console.log( mapProductos );
