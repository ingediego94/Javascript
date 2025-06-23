// Simulacion de usuario (podria estar ausente)
let nombreDelUsuario = undefined;   // Usuario no ha ingresado el nombre o no esta logeado

//-- USO DE FALSY --
// Si el nombreDelUsuario es Falsy (undefined, null, ""), entonces se usa "Invitado"
// Sie el nombreDelUsuario es Truthy (una cadena no vacia), entonces se usa nombreDelUsuario.

const nombreParaMostrar = nombreDelUsuario || "INVITADO";
console.log( `Bienvenido ${nombreParaMostrar}` );


// ----------------------------------------------------------------------
// -- SIN FALSY --
let nameToShow;

if (nombreDelUsuario === null || 
    nombreDelUsuario === undefined ||
    nombreDelUsuario === ""
){
    nameToShow = 'INVITED'
}
else
{
    nameToShow = nombreDelUsuario;
}

console.log( `Welcome, ${nameToShow}` );



// AMBOS CODIGOS HACEN EXACTAMENTE LO MISMO, SOLO QUE UNO DE MANERA RESUMIDA.