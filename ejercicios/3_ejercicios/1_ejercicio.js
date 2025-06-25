// closure contador:
// Crea una función 'crearContador()' que retorne otra función que incremente y retorne un número cada vez que se llama.

function crearContador() {
    let num1 = 1;

    function incremento() {
        return num1++;
    }

    function decremento() {
        return num1--;
    }

    return {
        incrementar: incremento,
        decrementar: decremento
    };
}

const contador = crearContador();

console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.decrementar()); // 1
