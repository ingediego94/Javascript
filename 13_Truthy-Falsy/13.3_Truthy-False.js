
// SIN TRUTHY
let tareasPendientes = [
    "Comprar víveres",
    "Llamar al cliente",
    "Escribir reporte"
];


console.log("---Procesando tareas (sin Truthy/Falsy explícito) ---");

// Opcion 1: comprobando si la longitud es mayor que 0
while (tareasPendientes.length > 0){
    let tareaActual = tareasPendientes.shift();  // .shift() quita el primer elemento y lo devuelve.
    console.log(`Realizando: ${tareaActual}`);
}

console.log("Todas las tareas procesadas.");


// ----------------------------------------------------------------------------

// CON FALSY

let tareasPendientes_2 =[
    "Enviar email",
    "Planificar reunión",
    "Actualizar software"
];

console.log("\n--- Procesando tareas (usando Truthy/Falsy) ---");

// --- APLICACION DE TRUTHY/FALSY EN EL WHILE ---
// `tareasPendientes_2.length` se evaluará como:
// - Truthy (si es > 0, ej. 3, 2, 1) -> el ciclo continua
// - Falsy (si es 0 ) -> el ciclo se detiene
while (tareasPendientes_2.length){
    let tareaActual_2 = tareasPendientes_2.shift();
    console.log( `Realizando: ${tareaActual_2}` );
}

console.log("Todas las tareas procesadas (con Truthy/Falsy)");
