
//SET
// Aunque es un listado de datos ordenados, no tenemos el acceso directo a los índices.

// Declaracion
let mySet = new Set();  // si o si debemos iniciarlo asi

// Inicializacion
mySet = new Set(["Diego", "Vallejo", 29, 'dieego14gf@gmail.com']);

console.log( mySet );


// Metodos

// Add
mySet.add("pepitoperez@hotmail.com");
console.log(mySet);

// Delete
mySet.delete('dieego14gf@gmail.com');   // con delete es obligatorio pasarle el texto exacto que queremos eliminar
console.log( mySet );


mySet.delete(true);  
console.log( mySet );


// https://www.youtube.com/watch?v=1glVfFxj8a4    2:50:00

