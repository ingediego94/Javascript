
// Operador Spread (...)

// Es similar a parametros rest, pero ya no se utiliza al crear una funcion,
// sino que se usa en el momento en que vamos a LLAMAR LA FUNCION PARA QUE ACTUE CON 
// N CANTIDAD DE DATOS QUE ESTÁN DENTRO DE UN ARRAY.
// Desempaqueta un array para tratar con sus datos. Recordar que por el contrario 
// los parámetros rest empaquetaban todo en un array, aqyu es al contrario.

const numeros = [1,2,3,4];      // tenemos un array de numeros

function sumaConSpread(a, b, c){    // tener muy en cuenta la cantidad de params que le solicitamos.
    return a + b + c;
}

console.log( sumaConSpread(1,2,3,4) );      // sin Spread
console.log( sumaConSpread(...numeros) );   // CON SPREAD


// tener muy en cuenta la cantidad de params que le solicitamos, en el ejemplo pediamos 
// 3 como mínimo, si el array tiene mas no pasa nada, pero si el array tiene una 
// longitud menor a la especificada en los params, generara un error.
const elementos = [1,4];

console.log( sumaConSpread(...elementos) );
