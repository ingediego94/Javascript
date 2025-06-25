
function multiplicar (factor){
    return function(numero){
        let result = numero * factor;
        return result;
    };
}

const por_10 = multiplicar(10);
const por_3 = multiplicar(3);


console.log(por_10(2));
console.log(por_3(4));

console.log("-----------------------------------");



function resta(menos){
    return function(numero){
        const resultado = numero - menos;
        return resultado;
    };
}

const resta_8 = resta(8);
const resta_30 = resta(30);

console.log(resta_8(4));
console.log(resta_30(50));