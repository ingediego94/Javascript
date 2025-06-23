/*
QUE SON TRUTHY Y FALSY?
Una categorizacion de valores en JS que determina como comportan en contextos 
booleanos, donde se espera una evaluación booleana (T-F).

*/

// SIN TRUTHY:
// El usuario ingresó un nombre:
let nombreUsuario = 'Alice';

    // sin el uso de truthy: evalua una por una todas las condiciones.
if (nombreUsuario !== null && 
    nombreUsuario !== undefined &&
    nombreUsuario!== "" ) {
        console.log(`Hola, ${nombreUsuario}. Evauluando condic una a una (SIN TRUTHY)`);
    }
else {
    console.log("Por favor ingresa tu nombre.");
    
}

// -----------------------------------------------------------------------------------------

// CON TRUTHY:
    //Ya Evalua de una vez, en este caso como TRUE x q !== de (null, undefined y "")
if (nombreUsuario) {
    console.log(`Hola ${nombreUsuario}. Evauluando condic de forma resumida (CON TRUTHY).`);
}
else {
    console.log("Por favor ingresa tu nombre.");
    
}