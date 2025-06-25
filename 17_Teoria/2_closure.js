const miContador = (function() {
    let _contador = 0;

    function incrementar(){
        return _contador ++;
    }

    function decrementar() {
        return _contador --;
    }

    function valor(){
        return _contador;
    }

    return {
        incrementar,
        decrementar,
        valor
    }
}) ();

console.log( miContador );                  
console.log( miContador.valor() );          // imprime: 0
console.log( miContador.incrementar() );    // imprime: 0
console.log( miContador.valor() );          // imprime: 1
console.log( miContador.incrementar() );    // imprime: 1
console.log( miContador.incrementar() );    // imprime: 2
console.log( miContador.valor() );          // imprime: 3
console.log( miContador.decrementar() );    // imprime: 3
console.log( miContador.valor() );          // imprime: 2
