
//SET
// Aunque es un listado de datos ordenados, no tenemos el acceso directo a los índices.

// Declaracion
let mySet = new Set();  // si o si debemos iniciarlo asi

// Inicializacion
mySet = new Set(["Diego", "Vallejo", 29, 'dieego14gf@gmail.com']);

console.log( mySet );


// Metodos

// Add
mySet.add("pepitoperez@hotmail.com");       // Agrego un elemento
console.log(mySet);


// Delete
mySet.delete('dieego14gf@gmail.com');   // con delete es obligatorio pasarle el texto exacto que queremos eliminar
console.log( mySet );



console.log( mySet.delete("golf") );    // imprime 'fase' porque "golf" no existe en el set
console.log( mySet.delete("Vallejo") );    // imprime 'true' porque "Vallejo" SI existe en el set

console.log( mySet );


// has:         para validar si existe o no un dato
console.log( mySet.has("guitarra") );   // como no esta en el set, retorna 'false'
console.log( mySet.has("Diego") );      // como si esta en el set, retorna 'true'


// size:        validar el tamaño del set (es como el length)
console.log( mySet.size );      // tamaño del set


// convertir un set a un array
let myArray = Array.from(mySet);
console.log( myArray );


// Convertir un array en un set
let mySecondSet = new Set( myArray );
console.log( mySecondSet );











// https://www.youtube.com/watch?v=1glVfFxj8a4    2:50:00

