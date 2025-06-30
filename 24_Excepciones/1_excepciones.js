
// Excepcion
// Excepciones son los errores que se produce en el codigo por algo que no tuvimos en cuenta.
// Capturamos esos errores para que no detengan nuestro programa.


let myObject 

try{
    // Codigo que intenta ejecutar:
    console.log( myObject);
    console.log( myObject.email);   // error porque no existe la propiedad email
} catch{
    // Bloque de error
    console.log( "Se ha producido un error." );
    
}
console.log("---------------------------");


// Tambien podemos capturar el error y mostrarlo por pantalla

try{
    console.log( myObject.email);   // error porque no existe la propiedad email
} catch ( error ){
    console.log( "Se ha producido un error: " , error.message );   // hay muchas mas a parte de .message
    
}

console.log("---------------------------");


// Existe el finally, que se ejecuta si o si, independientemente de si hay errores o no.

try{
    console.log( myObject.email);   // error porque no existe la propiedad email
} catch ( error ){
    console.log( "Se ha producido un error: " , error.message );   // hay muchas mas a parte de .message
} finally {
    console.log( "Este codigo se ejecuta siempre." );
    
}


// Tambien podemos lanzar un error a propósito para cuando algo no sale como lo esperamos.
// Esta sería la forma de hacerlo:

//  throw new Error("Este es un mensaje de error intencional");