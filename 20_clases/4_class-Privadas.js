// Para volver una clase privada, solo debemos agregarle un '#' antes de la 
// propiedad, así tal cual como esta en 'bank'. Importante debemos ponerlo también
// entre la definicion de la clase y el constructor.
class PrivatePerson{
    
    #bank

    constructor(nombre, edad, alias, bank) {
        this.nombre = nombre
        this.edad = edad
        this.alias = alias
        this.#bank = bank
    }

    pagar(){
        this.#bank
    }
}

let persona5 = new PrivatePerson('Felipe', 26, "Pipe", "4931-1715-115-23");



// NO PODEMOS ACCEDER PARA VERLA NI MODIFICARLA

// Solo dentro de la clase se pueden acceder a las propiedades
console.log( persona5.alias );      // podemos acceder a 'alias' porque es publica
// DESCOMENTAR LINEA 25:
//console.log( persona5.bank );       // NO PODEMOS acceder a bank porque es privada.


// tratar de acceder para modificar bank
persona5.bank = 'Bancolombia';  // Aqui estamos creando otra prop. bank, no estamos modificando la privada original
console.log( persona5.bank );

persona5["bank"] = "Lulo Bank";     // no estamos modificando la original
console.log( persona5["bank"] );
