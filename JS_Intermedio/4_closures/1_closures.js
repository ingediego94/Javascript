
// Closures (Clausuras)

// Cuando una funcion que es interna a otra funcion, va a acceder a variables de la 
// funcion externa
function crearContador(){
    let contador_x = 0;
    
    return function ejecutarContador(){
        contador_x ++;
        console.log(`Contador: ${contador_x}`);
    }
}

const contador = crearContador();   // ciudadano de primera clase
contador();
contador();
contador();
contador();

//  cada vez que llamamos a crearContador, nos va a retornar la funcion interna(ejecutarContador).
// al ser contador un ciud. de 1ra clase, que es una variable, esta va a almancenar en su memoria
// el valor de contador, por ello cada nuevo llamado de ella el contador se incrementará en uno.

// Eso pasa porque la funcion interna (ejecutarContador), accede al contexto de la funcion externa (crearContador)
// pero manteniendo el estado de la variable despues de ejecutarse.

// Podemos ejecutarla tantas veces queramos, pero manteniendo el scope de la funcion que la esta conteniendo.

console.log("----------------");


const contador2 = crearContador();   // ciudadano de primera clase
contador2();
contador2();
contador2();
contador2();