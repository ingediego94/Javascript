// dentro de un objeto llamando a una propiedad del mismo 
const obj = {
    a : "Hi!",
    getA() {
        return this.a;
    },
};

console.log(obj.getA());    // Imprime "Hi!"

// --------------------------------------

// contexto global
console.log(this);  // Hace referencia al objeto window

// Dentro de una función
function test(){
    return this;
};

console.log( test() );    // Hace referencia al objeto window

// -------------------------------------


// Como constructor:
function Car(){
    this.serial = "abc123";
}

const ferrari = new Car();
console.log(ferrari.serial);    // Imprime el serial "abc123"
