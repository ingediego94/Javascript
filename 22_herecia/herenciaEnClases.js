
class Animal {
    constructor(nombre){
        this.nombre = nombre
    }

    sound(){
        console.log( "Emite un sonido genérico." );
        
    }
}

// Clase Dog
// si quisieramos que perro heredara de Animal usamos 'extends'
class Dog extends Animal{
            // con extends Animal, estariamos heredando el constructor su superclase (Animal)

    sound(){
        //super.sound()   // llama al superSound de Animal
        console.log("Guau ¡");      // sobrescribe al sound inicial del Animal
    }   
    
    run(){
        console.log("El perro corre.");
    }
};

class Fish extends Animal{

    constructor(nombre, tamanno){       // Creando un constructor exclusivo a pez
        super(nombre)       //como ya tenemos un constructor que se llama "nombre", debemos hacer que el actual haga una llamada al superConstructor
        this.tamanno = tamanno          
    }
    
    swim(){
        console.log("El pez nada.");
    }
}



let myDog = new Dog("MoureDog");    // hereda todo lo de Animal
myDog.run();        // Imprime: 'El perro corre'
myDog.sound();      // Imprime: 'Emite un sonido generico'

let myFish = new Fish("Nemo", 100);     // Ahora ya debemos darle nombre y tamanno
myFish.swim(); 
myFish.sound(); 