class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person = new Person("Luisa", 23, "Lu");
let person2 = new Person("Camila", 29, "Cami");

console.log( person );
console.log( person2 );


// Valores por defecto 
class DefaultPerson {
    constructor(name = "Sin nombre", age = 0, alias="Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson();
person2 = new DefaultPerson("Emilia", 21);

console.log( person3 );
console.log( person2 );


// propiedades privadas
class PrivatePerson{
    #bank
    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay (){
        this.bank
    }
}

let person4 = new PrivatePerson("Juan", 40, "Juancho", "234235435");
console.log( person4.bank );


// Herencia
class Animal {
    constructor(name){
        this.name = name
    }

    sound(){
        console.log( "El animal emite sonido generico" );
        
    }
}



class Dog extends Animal{
    sound(){
        console.log( "guau");
    }

    run (){
        console.log( "El perro corre" );
        
    }
}



class Fish extends Animal{
    constructor(name, size){
        super(name)
        this.size = size
    }

    swim(){
        console.log( "El pez nada");
        
    }
}

