
// esta sindo usado como un metodo constructor

function Person(nombre, edad){      // Debería ser una clase
    this.nombre = nombre
    this.edad = edad
}

let persona1 = new Person('Diego', 31);
console.log(persona1);

// nos indica que persona1 es un objeto
console.log( typeof persona1 );

