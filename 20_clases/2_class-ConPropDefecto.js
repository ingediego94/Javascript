// Creando un clase que tiene datos por defecto
class PersonaPorDefecto{
    constructor(nombre = "Sin nombre", edad = 0, alias = 'Sin alias'){
    this.nombre = nombre
    this.edad = edad
    this.alias = alias
    }
}

let persona3 = new PersonaPorDefecto("Camilo", 23);
console.log( persona3 );    // aunque no le hayamos puesto alias, tendremos un 'Sin alias'.


console.log("-----------------------------");

// Acceso a propiedades de la clase
// podemos usar tanto el . como [] así como en los objetos
console.log( persona3.alias );
console.log( persona3["alias"] );

console.log("-----------------------------");


// Modificar una propiedad:
persona3.alias = "Cachimiro";

console.log( persona3["alias"] );
