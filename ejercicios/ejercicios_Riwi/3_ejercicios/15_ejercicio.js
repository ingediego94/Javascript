
// Filtrar edades válidas
// Dado un arreglo de edades (puede incluir null, NaN, undefined, "", etc.), 
// devuelve un nuevo arreglo con solo las edades numéricas mayores o iguales a 18

let edades = [
    23, 13, 65, undefined, , 55, , 2, 4, 4, "", 73, null, null, NaN, 22
];

let ages_Ok = [];

for (edad of edades){
    let saveName = edad ? ages_Ok.push(edad) : null;

}

console.log( ages_Ok );
