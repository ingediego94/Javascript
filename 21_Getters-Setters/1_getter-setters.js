
// Funcionan para ver y modificar propiedades privadas de una clase

class GetSetPerson{
    
    #nombre
    #edad
    #alias
    #bank

    constructor(nombre, edad, alias, bank) {
        this.#nombre = nombre
        this.#edad = edad
        this.#alias = alias
        this.#bank = bank
    }

    // para poder ver un dato privado, es obligatorio con un get
    get nombre(){
        return this.#nombre     // es obligatorio poner el #antes de la propiedad
    };


    set bank(newBank){
        return this.#bank = newBank
    };

    // Este get es solo para poder ver el dato de banco. Se lo puede comentar para ver su efecto
    get bank(){
        return this.#bank
    }
}

let persona6 = new GetSetPerson('Felipe', 26, "Pipe", "4931-1715-115-23");

console.log(persona6);
console.log( persona6.nombre );

persona6.bank = "0000-0001-1010";       // debe ser del mismo tipo de dato inicial

console.log( persona6.bank );

