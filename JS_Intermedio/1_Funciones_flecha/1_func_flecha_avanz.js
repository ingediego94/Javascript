
// Funciones flecha con retorno implícito:
// Cuando el cuerpo de la funcion es solo una expresión, es decir, no tiene return

const multi = (a, b) => a *b;

console.log( multi(3,4) );

// ------------------------------------------------------------------
// this lexico
// es este this. para poder acceder a un dato en el contexto del objeto
const manejador = {
    nombre : 'Diego', 
    saludo : function (){
        console.log( `Hola, ${this.nombre}` );      
    },

    // this.nombre será undefined, porque las func. flecha crean su propio contexto de objeto
    saludoFlecha : () => {
        console.log( `Saludo Flecha a ${this.nombre}` );    // será undefined
    }
}

manejador.saludo();
manejador.saludoFlecha();