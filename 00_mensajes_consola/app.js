
//IMPRIMIR MENSAJES POR CONSOLA:

// CONSOLE.LOG(): 
let mensaje1 = 'Hola mundo';

console.log(mensaje1);

console.log("This is", "a simple log message.");



// CONSOLE.ERROR():
//      Siempre se muestra en rojo.
let mensaje2 = 'Mensaje de error 404.';

console.error(mensaje2);

console.error("This is an error message.");

console.error("Error to conect database: ", new Error("Conexion fallida."));



// CONSOLE.WARM():
//      Muestra un mensaje de advertencia que señala situaciones que no son 
//      errores críticos, pero pueden llevar a comportamientos inesperados.
//      En los navegadores suele ser destacados con color amarillo.
let mensaje3 = 'Este es un mesaje de advertencia.';

console.warn(mensaje3);

console.warn("This is a warning message.");



// CONSOLE.INFO():
// Es similar a console.log(), pero se utiliza para mostrar mensajes informativos.
// Muchos navegadores suelen presentarlos con un icono de informacion.
let mensaje4 = 'Este es un mensaje informativo en la página.'

console.info(mensaje4);

console.info("This is an info message.");


// CONSOLE.TABLE()
let data = [
    ['Diego',29],
    ['Sara', 22]
];

console.table(data);

let data_2 = [
    {nombre: 'Diego', edad: 29},
    {nombre:'Sara', edad: 22}
];

console.table(data_2);



// CONSOLE.GROUP()  Y  CONSOLE.GROUPEND():
    // permiten agrupar varios mensajes de la consola bajo un mismo encabezado. 
    // Puedes anidar varios mensajes en un grupo, y este grupo se puede expandir o contraer en la consola.
console.group("TITULO DEL GRUPO DE MENSAJES");
console.log(mensaje1);
console.log("Esta es una agrupacion de mensajes.");
console.groupEnd();

console.group("MENSAJES DE NOTIFICACION: ");
console.log("Name: Diego V.");
console.log("Year: 2025.");
console.groupEnd();



// CONSOLE.TIME()  Y   CONSOLE.TIMEEND():
    // permiten medir el tiempo de ejecución de una operación o un bloque de código. Comienzas la medición 
    // con console.time() y la terminas con console.timeEnd(). El tiempo total transcurrido se mostrará en la consola. 

        // console.time(identifier);
        // // Code whose duration we want to measure.
        // console.timeEnd(identifier);

console.time('time');
console.info("testing");
console.timeEnd('time');


// ASSERT
let edad = 17;
console.assert(edad >= 18, "El usuario debe ser mayor de edad.")