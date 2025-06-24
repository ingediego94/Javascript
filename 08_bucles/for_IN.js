// for…in: se utiliza para recorrer las propiedades de un objeto. 
// A diferencia de for...of, que recorre los valores de un array o iterable, 
// for...in recorre las claves (nombres de las propiedades) de un objeto. 

let persona1 = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    true : false
}

/*

for (let clave in objeto){
    // Accede a objeto[clave]
}

*/

for (let clave in persona1){
    console.log(`${clave}: ${persona1[clave]}`);
    
}


console.log("------------------------");

// --------------------------------------------------------------

const teamLeader = {name: "Andrea", language: "Java"};

// Using for IN  to iterate over the properties of a single developer object
for(const key in teamLeader){
    console.log(`${key} : ${teamLeader[key]}`);
    
}
