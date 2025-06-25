// Un closure es una funcion que encapsula una serie de variables y definiciones locales
//  que únicamente seran accesibles si son devueltas con el operador return, eso 
// permite en cierta manera tener variables privadas. Este patron permite modularizar 
// el codigo y en cierta forma generar un tipo de clase.

const a = " Hey !";

function global () {
    
    const b = "¿Que ";
    
    function local() {
        const c = "tal ?"
        return a + b + c;
    }

    return local;
};


console.log( global() );    // Retorna function: local

console.log( global()() );      // con doble () porque para que ejecute ambas funciones
    
// el resultado de global()(); debería ser: Hey! ¿Que tal ?

const closure = global();
console.log( closure() );


