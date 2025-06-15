// Otros Métodos Útiles

// a) Object.keys() / Object.values()
// Obtiene las claves o valores de un objeto.
let persona = { nombre: "Ana", edad: 25 };
console.log(Object.keys(persona)); // ["nombre", "edad"]
console.log(Object.values(persona)); // ["Ana", 25]



// b) JSON.stringify() / JSON.parse()
// Convierte un objeto a string JSON y viceversa.
let objeto = { nombre: "Diego" };
let texto = JSON.stringify(objeto);
console.log(texto); // '{"nombre":"Diego"}'

let original = JSON.parse(texto);
console.log(original.nombre); // "Diego"


