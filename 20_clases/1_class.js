// un constructor es una funcion especial, de método que nos permite definir
// cual es la estructura inicial de dicho objeto.

let person = {
    nombre : "Alexander", 
    edad : 29,
    alias : 'Apu'
};


// para hacer lo mismo que en el anterior let, pero con clases, sería:

    // Una clase es una plantilla / molde para crear un objeto sin necesidad de
    // estarle declarando e inicalizado cada una de sus propiedades una a una,
    // en las clases solo le ingresamos los parametros y listo, ya lo crea.
class Person {

    constructor(namex, age, nickname) {
        this.namex = namex
        this.age = age
        this.nickname = nickname
    };
};

let persona_1 = new Person('diego', 29, 'botas locas');
let persona_2 = new Person('esteban', 30, 'pingüi');

console.log( persona_1 );
console.log( persona_2 );

console.log("---------------------------");

// Accediendo a los datos
console.log( persona_1.namex );         // con '.'
console.log( persona_2["namex"] );      // o con [""]



