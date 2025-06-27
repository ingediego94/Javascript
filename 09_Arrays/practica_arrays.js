
const personas = ["Carlos", "Maria", "Jose"];

personas[3] = "Diego";

console.log(personas);

// push() = agregar al final
personas.push("Juan", "Paul");
console.log(personas);


// unshift() = agregar al inicio
personas.unshift("Sara", "Ana");
console.log(personas);


// pop()  = elimina y retorna del final
let ultimo = personas.pop();
console.log(personas);
console.log(ultimo);

//shift()  = elimina y retorna del inicio
let inicio = personas.shift();
console.log(inicio);
console.log(personas);

// slice()  = nuevo array parcial
const nuevoArray = personas.slice(1,3);
console.log(nuevoArray);


// splice()  = elimina varios elementos a la vez de acuerdo al rango dado
personas.splice(1,3,"MOHAMED")
console.log(personas);
