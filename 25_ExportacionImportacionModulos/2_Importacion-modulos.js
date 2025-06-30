
// Archivo donde vamos a importar los elementos de otro archivo
// Importante crear el package.json para poder usar modulos

// Tedríamos que definir uno a uno para importarlos
import { suma, PI, nombreVariable, Circulo } from "./1_Exportacion-modulo.js";


// Importamos funciones:
console.log( suma(5, 15) );

// Importamos propiedades:
console.log( PI );
console.log( nombreVariable );

// Importamos clases:
let circulo_1 = new Circulo(10);
console.log( circulo_1.radio );
console.log( circulo_1.area() );


// Importacion por defecto
import substraction from "./1_Exportacion-modulo.js";  // podemos dejarle el mismo nombre "substraction", o cambiarselo por otro
console.log( substraction(20, 5) );



