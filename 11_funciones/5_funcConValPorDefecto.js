
// FUNCIONES CON VALORES POR DEFECTO

// Imagina que tenemos la siguiente operacion, la cual produce una suma,
// que tal si el usuario no le ingresa los dos parametros solicitados,
// la funcion termina sin servir.

function suma(a,b){
    console.log(a + b);
}

suma(5,10);
suma(5);
suma();

// Para solucionar esto, podemos inciar los parametros con un valor por 
// defecto, para evitar este tipo de problemas. ASÍ:
function sumaPorDefecto (a=0, b=0){
    console.log( a + b );
}

sumaPorDefecto();
sumaPorDefecto(15);
sumaPorDefecto(5,10);
sumaPorDefecto(b=5);
