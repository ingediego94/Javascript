
// Metodos estaticos

class MathOperations{

    static sum(a , b){
        return a + b;
    };
}

// No es neceario instaciar la clase para acceder al método
// let suma = new MathOperations();
// suma.sum(5, 10);
// console.log( suma );


// con el static solo hacemos: MathOperations.sum(5, 10) y ya tendríamos el resultado

console.log( MathOperations.sum(5, 10) );