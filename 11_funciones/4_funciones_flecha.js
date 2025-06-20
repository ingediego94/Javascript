/*
FUNCIONES FLECHA:
Introducidas en ES6, las funciones flecha son una forma más concisa de escribir funciones. 
Se definen usando una flecha (=>) en lugar de la palabra clave function. Además de ser más 
cortas, las funciones flecha tienen un comportamiento especial en cuanto al valor de this, 
que las hace útiles en ciertos contextos (aunque no profundizaremos en this ahora). 
*/

const sum = (...numbers) => {
    return numbers.reduce((acc, number) => acc + number, 0)
};

console.log(sum(1, 2, 3, 4, 5));
