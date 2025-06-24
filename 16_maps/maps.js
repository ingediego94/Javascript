// MAPS

// Un Map es una colección de pares clave-valor en la que tanto las claves 
// como los valores pueden ser de cualquier tipo. A diferencia de los objetos,
//  los maps permiten usar cualquier tipo de dato como clave. 

let myMap = new Map();

// Agregamos otra clave-valor al map
myMap.set('name', 'Antony');
myMap.set(123, 'ID');

console.log( myMap.get('name') );

