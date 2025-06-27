// MAPS
// Se basan en clave : valor. no puede haber repetidos en clave, pero si en valor

// Declaracion de un nuevo mapa
let myMap = new Map();

// Incialización del mapa
myMap = new Map([
    ["name" , "Diego"],
    ["email" , "dieego14a@gmail.com"],
    ["age" , 29]
]);

console.log( myMap );


// Metodos y propiedades

// set
    // agregar un solo par clave => valor
myMap.set("alias" , "Apu");
console.log(myMap);

    // agregar varios pares clave => valor
myMap.set(
    ("genero" , "hombre"), 
    ("carro" , "Toyota")
);

console.log(myMap);

    // actualizar un el valor relacionado a una clave
myMap.set("carro", "Ferrari");
console.log(myMap);

