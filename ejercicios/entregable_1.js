
//PARTE 1:

//VARIABLES
let nombreEmpresa = 'Coca Cola';
let productosInventario = 150;
let precioUnidad = 29.99;
let activo = false;
let puntos = 100;   //120


//IMPRIMIR POR CONSOLA
console.log(nombreEmpresa);
console.log(productosInventario);
console.log(precioUnidad);
console.log(activo);

console.log('------------------------------------------');


// PARTE 2:
let codPostal = '05001';
let conteoEmpleados = 50;
let porcentajeIva = 0.19;
let disponibilidad = false;
let animales = {
    'animal' : 'perro', 
    'numero_patas' : 4,
    'mamifero' : true
}


console.log(codPostal , typeof codPostal);
console.log(conteoEmpleados , typeof conteoEmpleados);
console.log(porcentajeIva , typeof porcentajeIva);
console.log(disponibilidad , typeof disponibilidad);
//impresion datos diccionario
console.log(animales.animal , typeof animales.animal);
console.log(animales.numero_patas , typeof animales.numero_patas);
console.log(animales.mamifero , typeof animales.mamifero);

console.log('------------------------------------------');


// PARTE 3:
let telefono = 'Teléfono';
let numeroTel = "3101234567";
let telCompleto = telefono + ' ' + numeroTel;
console.log(telCompleto);


let ciudad = 'Medellín';
let pais = 'Colombia';
console.log("Estoy en " + ciudad + ", " + pais);


let libro = prompt("Ingrese el nombre del libro: " )