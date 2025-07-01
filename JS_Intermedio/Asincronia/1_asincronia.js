
// Asincronia:
// dejar corriendo otro proceso en otro hilo para que podamos hacer otra tarea a la par.

// código sincrono

console.log("Inicio:");

setTimeout(() => {
    console.log("Esto se ejecuta despues de 3 segundos");
}, 3000);

console.log("Fin");


// EVENT LOOP (Bucle de eventos)

// Componentes del Event Loop:
// 1. Call Stack (pila de ejecución)
// 2. Web Apis (APIs del navegador) o Node.js:setTimeout()...
// 3. Task Queue (cola de tareas) y Microtask Queue

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asicrónas -> Web APIs o Node.js
// 3. Operacion termina -> La coloca en Task Queue o Microtask Queue
// 4. Si Call Stack vacio -> Mueve tareas del Microtask o Tas Queue al Call Stack
// 5. El proceso se repite.

// Problema: callback hell

function step1(callback){
    setTimeout(() => {
        console.log("Paso 1 compleatado.");
        callback()
    }, 1000)
}


step1(() => {
    console.log("Todos los pasos completados.");
    
})

// -------------------------

    // solo tenerlo presente para el ejemplo de callback hell al final
    function step2(callback){
        setTimeout(() => {
            console.log("Paso 2 compleatado.");
            callback()
        }, 1000)
    }

    // solo tenerlo presente para el ejemplo de callback hell al final
    function step3(callback){
        setTimeout(() => {
            console.log("Paso 3 compleatado.");
            callback()
        }, 1000)
    }


// un ejemplo de callback hell es:
// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("Todos los pasos completados.");
//         })
//     })
// })