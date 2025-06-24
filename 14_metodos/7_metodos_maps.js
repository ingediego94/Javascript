// Metodos de maps

let myMap = new Map();

// Agregamos otra clave-valor al map
myMap.set('name', 'Antony');
myMap.set(123, 'ID').set('neighbor', 'Betania');


// Permite ver el valor asociado a la clave 'name'
console.log( myMap.get('name') );


// Verifica si existe la clave ingresada
console.log( myMap.has('neighbor') );


// Elimina el par clave-valor
myMap.delete(123) 
console.log( myMap );

// Conocer la longitud del map
console.log( myMap.size );

