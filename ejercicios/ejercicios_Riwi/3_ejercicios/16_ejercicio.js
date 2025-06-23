// Promedio de calificaciones
// Dado un arreglo de objetos {nombre, nota}, crea una función que devuelva 
// el promedio general.

const grades = {
    diego : 100,
    carlos : 75,
    juan : 23, 
    edison : 92
};


const values = Object.values(grades);
// const itemsNumber = Object.keys(grades).length;      // it's the same
// const itemsNumber = Object.values(grades).length;    // it's the same 
const itemsNumber = values.length;     

const sum = values.reduce((acumulator, valor) => acumulator + valor, 0 )

const average = sum / itemsNumber;


console.log(`Values ${values}`);
console.log(`Number of items: ${itemsNumber}`);
console.log(`Sum of values: ${sum}`);
console.log(`Average: ${average}`);


// General sintaxis of line 18:
        // array.reduce((acumulador, valorActual) => {
        //   return nuevaAcumulación;
        // }, valorInicial);

// acumulator: almacena el resultado parcial (comienza en 0, el valor inicial).

// valor: es cada elemento del array que se va sumando.

// 0: es el valor inicial del acumulador.
