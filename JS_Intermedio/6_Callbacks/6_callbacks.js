
// Callbacks
// Es una funcion que se le pasa como parametro a otra funcion, y se ejecuta cuando
// la operacion se ha finalizado.

function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;      
}

// Suma y ejecuta la callback
function processData(data, callback){
    const result = sum(...data);
    callback(result);
}


// Opcion 1: solo muestra el resultado
function processResult(result) {
    console.log(result);
}

// Opcion 2: Me imprime un texto y el resultado
function processResult_2(result){
    console.log(`Mi resultado es: ${result}`);
    
}

processData([1,2,3], processResult);    // 6
processData([1,2,3], processResult_2);  // Mi resultado es: 6
processData([1,2,3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
});                                     // Mi resultado en la arrow function es: 6