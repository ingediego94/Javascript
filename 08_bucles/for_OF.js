const frutas = ['manzana', 'banana', 'cereza'];


for (let fruta of frutas){
    console.log(`Me gusta la ${fruta}.`);
}

/* Salida:
Me gusta la manzana.
Me gusta la banana.
Me gusta la cereza.

*/



// También funciona con Strings

for (let letra of "Hola"){
    console.log(letra);
}

/* Salida:
H
O
L
A
*/


const developers = [
    {name : "Diego", age : 29, rol : 'student'},
    {name : "Camila", age : 19, rol : 'student'},
    {name : "Sara", age : 23, rol : 'Leader Tech'},
];

for (const developer of developers){
    console.log(`${developer.name} is a software ${developer.rol} of ${developer.age} years `);
}