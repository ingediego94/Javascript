
// Funcion clasica - HOISTING
function funcTradicionaHoisting(nombre){
    return `Hola ` + nombre;
}

console.log( funcTradicionaHoisting("Diego") );


// FUNCION ANONIMA SIN HOISTING
    // Esta limitada por el scope
let funcAnonimaSinHoisting = function (nombre){
    return 'Saludos ' +  nombre;
}

console.log( funcAnonimaSinHoisting("Carlos") );


// FUNCIONES FLECHA     () => {}
    // 1. Esta limitada por el scope
    // 2. Al ser anonima, necesito una variable para poderla llamar despues
    // 3. No necesitan de la palabra reservada 'function'

let funcFlecha = (nombre) => { return 'Priviet ' + nombre}
console.log( funcFlecha('Maria') );

    // consideraciones:
    // a) Podemos omitir el return.
    // b) Si solo tiene un argumento, podemos omitir los parentesis.
    // c) Si es de una sola linea se pueden omitir las llaves.
    // d) Cuando la funcion no tiene parametros,los parentesis seran obligatorios.
    // e) Si en el cuerpo de la funcion se va a trabajar con un objeto, sera necesario envolver el cuerpo en parentesis ({}) 
        // para no confundir los {} del objeto con los de la funcion

let funcFlecha_RESUMIDA = nombre => 'Bon jour ' + nombre;
console.log( funcFlecha_RESUMIDA('Ofelia') );




