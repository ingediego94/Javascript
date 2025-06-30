
// 1. Crea una clase que reciba 2 propiedades.
// 2. Añade un metodo a la clase que utilice las propiedades.
// 3. Muestra los valores de las propiedades e invoca a la function
// 4. Añade un metodo estatico a la primera clase.
// 5. Haz uso del método estatico 
// 6. Crea una clase que haga uso de herencia.
// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para qye use propiedades privadas.
// 9. Utiliza los get y set y muestra sus valores
// 10. Sobreescribe un metodo de una clase que utilice herencia


class Humano{
    constructor(peso, altura){
        this.peso = peso
        this.altura = altura
    }

    datos(){
        console.log( `Su peso es de ${this.peso} Kg y su altura es ${this.altura} m.` );
    }

    static imc(peso, altura){
        return peso / (altura**2)
    }
}

let humano_1 = new Humano(73, 1.67);
console.log( humano_1 );

humano_1.datos();

console.log( Humano.imc(73, 1.67) );


class Asiatico extends Humano{

    #genero
    constructor(peso, altura, genero){
        super(peso, altura)
        this.#genero = genero
    };

    comer(){
        console.log("Los asiaticos comemos arroz.");
        
    };

    datos(){
        console.log( `Su peso es de ${this.peso} Kg y su altura es ${this.altura} m.` );
        console.log("Adicionalmente somos muy buenos ingenieros.");
        
    }

    get genero(){
        return this.#genero;
    };

    set genero(nuevoGenero){
        return this.#genero = nuevoGenero;
    };


};

let asiatico_1 = new Asiatico(67, 1.55, 'Masculino');
console.log( asiatico_1 );
asiatico_1.comer();
console.log( asiatico_1.genero );
asiatico_1.genero = 'Femenino';
console.log( asiatico_1.genero );
asiatico_1.datos();



