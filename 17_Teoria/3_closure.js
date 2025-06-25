
function crearContador (){                  // crea la funcion principal

    let contador = 0;                       // inicializa la variable contador en 0

    return function (){                     // retorna el return de la sub-funcion
        contador++;                         // incrementa el contador en 1
        return contador;                    // retorna el valor de esta subfunc
    };
}

const miContador =  crearContador();        // creamos una variable con que llama la funcion principal

console.log( miContador() );                // imprime: 1
console.log( miContador() );                // imprime: 2
console.log( miContador() );                // imprime: 3
