// Arrays (arreglos)

let variable = 5;       // Declarar una variable


// Forma antigua de declarar una lista o array
let arreglo_viejo = new Array();

// Declarar array o lista (ACTUAL)
let arreglo = [];




// Ejemplo
let cursos = ['Html', 'CSS', 'Javascript'];

//Obtener un elemento
console.log(cursos);
console.log(cursos[1]);   //El conteo empieza en 0

//Reemplazar elementos:
cursos[1] = 'PHP';
console.log(cursos);

//Agregar elementos en posicion específica
cursos[3]= 'Python';
console.log(cursos);

//Longitud de un arreglo
console.log(cursos.length);


// UNSHIFT: insertar un elemento al inicio del arreglo

// SHIFT: Quita elemento de la lista

// PUSH: Agrega un elemento al final de la lista.

// POP: Quita un elemento