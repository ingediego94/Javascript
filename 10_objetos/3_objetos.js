// AGREGANDO NUEVAS PROPIEDADES

let person = {
    name : "Diego",
    age : 29,
    gender : true,
    likes : "camping"
}

console.log(person);

// Agregamos otra nueva propiedad.
person.nationality = "Colombian";

console.log(person);


// Borrar una propiedad:
delete person.gender;
// o 
delete person["likes"]      //es lo mismo

console.log(person);

