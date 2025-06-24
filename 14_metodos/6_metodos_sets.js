// SETS

let mySet = new Set();

// Agregamos elementos al set
mySet.add(1);
mySet.add(2);
mySet.add(1);
mySet.add(8);

// Vemos que solo se almacena un 1 en el set
console.log(mySet);   


// Validamos que los elementos estan contenidos en el set.
console.log( mySet.has(1) );
console.log( mySet.has(4) );


//
mySet.delete(8);
console.log( mySet );


// Comprobamos la longitud del set
console.log( mySet.size );

