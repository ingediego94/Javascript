
// SIN FALSY

let nombrePerfil = "";

// --- TERNARIO SIN EVALUACIPON FALSY DIRECTA PARA CADENA VACIA ---
// Aqui la condicion es una comparacion EXPLÍCITA 'nombrePerfil !== ""  '
// Esta expresión se evalúa a 'false' porque "" ES igual a "".

let nombreParaMostrar = (nombrePerfil !== "") ? nombrePerfil : "N/A"  // el último valor se selecciona

console.log( `Nombre en perfil: ${nombreParaMostrar}` );

console.log("---");

// Probemos con un nombre real para ver que funciona
nombrePerfil = 'Maria';

nombreParaMostrar = (nombrePerfil !== "") ?
                    nombrePerfil :
                    "N/A";

console.log(`Nombre en perfil: ${nombreParaMostrar}`);


// -----------------------------------------------------------------

// CON FALSY
let profileName = "";   // Esta es una cadena vacia con Falsy

// -- Ternario con valor FALsy --
// La condición 'profileName' se evalua a 'false' porque "" es Falsy
// Por lo tanto, se ejecuta la segunda parte del ternario

let nameToShow = profileName ?
                profileName :
                "N/A";   // Este valor se selecciona

console.log( `Nombre en perfil: ${nameToShow}` );
