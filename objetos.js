const { log } = require("console")

let person = {
    name : 'Diego',
    age : 50,
    alias : 'clv'
}

console.log( person.name );
console.log( person["name"] );

person.age = 28;
console.log( person.age );

console.log( typeof person.age );

delete person.age;
console.log( person );


person.email = 'dieego132@gmail.com';
console.log( person );



// Creamos nuevo objeto
let person2 = {
    name : 'Jhon',
    age : 33,
    alias : 'JJ',
    walk : function() {
        console.log("La persona camina.");
        }
};

// ya ejecuta el console de dentro del método.
person2.walk();



// anidación de objetos
let person3 = {
    name : 'Sara María',
    age : 44,
    alias : "SM",
    walk : function (){
        console.log("La persona camina");
    },
    job : {
        name : 'Development',
        exp : 1,
        work : function () {
            console.log("La persona trabaja");
        }
    }
}

console.log( person3 );



// Creación de otro obj
let person4 = {
    name : 'Pedro Nel',
    age : 44,
    alias : "PNel",
    walk : function (){
        console.log("La persona camina");
    },
    job : {
        name : 'Development',
        exp : 1,
        work : function () {
            console.log(`${this.name} persona trabaja`);       // imprime el name del bloque de job
        }
    }
}

person4.job.work();


// Iteracion de 
for (i in person4){
    console.log(`${i} : ${person4[i]}`);    //debe ir dentro de [] nunca con punto '.'
    
}



// Creacion de clase y metodo constructor:
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log( "hello" );
        
    }
}

const person6 = new Person('Carlos', 23);
person6.sayHello();
console.log(person6);

