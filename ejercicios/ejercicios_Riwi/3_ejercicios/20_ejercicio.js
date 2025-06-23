// Reemplazar valores falsy
// Como programador, quiero recorrer un arreglo y reemplazar los valores 
// falsy por “N/A” para asegurarme de tener datos visibles y coherentes.

const arreglo = ['diego', null, 23, "", true, '3.144', undefined, 0, "texto", false];

const verdaderos = [];

for (arr of arreglo){
    let verdadero = (arr) ? verdaderos.push(arr) : verdaderos.push(arr='N/A');
    console.log();
    
}

console.log("El nuevo arreglo modificado es: ");

console.log(verdaderos);
