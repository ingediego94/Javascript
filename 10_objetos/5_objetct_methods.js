const person = {
    firstName: "John",
    lastName: "Doe",
    age: 37,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    camina : function(){
        console.log("La persona camina.");        
    },
    job : {
        role : "Programmer",
        exp : 10,
        work : function () {
            console.log( `El programador programa con ${this.exp} años de experiencia` );
        }
    }
};

console.log( person);
console.log( person.fullName() );
console.log( person.job );
console.log( person.job.role );     // usamos this.exp para referirnos al objeto superior, no solo a la funcion work
console.log( person.job.work() );


// ------------------------------------------------

console.log("----------------------------------------------");

// Podríamos pensar que si intentamos comparar estos dos objetos como igualdad, 
// nos deberían resultar iguales, pero no es así, ya que JS en los OBJETOS NO FUNCIONA
// CON VALORES ASOCIADOS, SINO CON UNA REFERENCIA, ES DECIR CON UNA DIRECCION DE MEMORIA.
// CUANDO LE DAMOS COMPARAR, NO COMPARA LOS VALORES, SINO LAS DIRECCIONES DE MEMORIA, LAS
// CUALES SON DISTINTAS.
let person2 = {
    name : "diego",
    age : 30,
    email : 'dieego143@gmail.com'
}; 

let person3 = {
    name : "diego",
    age : 30,
    email : 'dieego143@gmail.com'
}; 

console.log( person2 == person3);
console.log( person2 === person3);


// Acceder a todos los datos usando un iterador
for( let key in person3) {
    console.log( key + ": " + person3[key]);
}