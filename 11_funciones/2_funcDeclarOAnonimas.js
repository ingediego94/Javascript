/*
FUNCIONES DECLARADAS:

const descriptionName = function(parameter1, parameter2) {
    // code that the function executes.
    return result;
};

*/


const greet = function(name = 'Diego'){
    return `Hello, ${name}`;
};

console.log(greet());


// _------------------------------------------------

const anonima = function(empresa){
    console.log(`Bienvenida comitiva de ${empresa}`);
    
}

anonima("Coca Cola");