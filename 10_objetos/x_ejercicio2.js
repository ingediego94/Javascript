// Desesctructuracion y propagacion

// Desestructuracion de arrays
const arreglo = [1,2,3,4];

let [miValor1, miValor2, miValor3, miValor4, miValor5] = arreglo;

console.log( miValor1 );
console.log( miValor2 );
console.log( miValor3 );
console.log( miValor4 );
console.log( miValor5 );

console.log( "-----------" );

// Desestructuracion de objetos
const obj = {
    nombre : 'carlos',
    edad : 23,
    casado : true,
    hijos : {
        hijo1 : 'camila',
        hijo2 : 'daniel',
        hijo3 : 'sara'
    }
};

// en objetos si o si el nombre de la variable debe ser EXACTAMENTE EL MISMO
// QUE TIENE EN LA PROPIEDAD DEL OBJETO.
let {nombre, edad, hijos, casado, email='diegox@gmail.com'} = obj;

console.log( nombre );
console.log( edad );
console.log( hijos );
console.log( casado );
console.log( email );   // le puedo agregar este email aunque no exista en el obj

console.log("---------");


console.log(obj);       // y no se guardará en el objeto original.



console.log("---------------------------");

// podemos asignarle otro nombre a la variable pero que siga llamando a la misma propiedad
let{ nombre: nombrePer, casado : esposo} = obj

console.log( nombrePer );
console.log( esposo );


console.log("---------------------------");
// PROPAGACIÓN (...)
// propagar los datos de un objeto a otro

let arreglo_2 = [...arreglo];
console.log( arreglo_2 );   // tiene los mismos datos de arreglo

let arreglo_3 = [...arreglo, 5, 6, 'gato'];
console.log( arreglo_3 );   // vemos que hemos agregado 2 valores mas, sin modificar el original


// Combinación de varios arrays
let arraysVarios = [...arreglo, ...arreglo_3];
console.log( arraysVarios );



// Desestructuracion de objetos
let objetoCopia = {...obj};      // es solo una copia tal cual de obj
console.log( objetoCopia );

let objetoAlterado = {...obj, direccion : "cra 50 # 23"};   // es una copia con mas propiedades
console.log( objetoAlterado );


