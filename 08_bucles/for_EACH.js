// forEach (Iterar sobre arrays)
// El método forEach es una función propia de los arrays que permite ejecutar una función por cada 
// elemento del array. Este método es muy útil cuando quieres aplicar una acción a cada valor del array, 
// sin necesidad de controlar manualmente el índice o las condiciones del bucle.

const coders = [
    {name:"Edwin", cohorte : 1},
    {name:"Milton", cohorte : 2},
    {name:"Javier", cohorte : 3},
];

coders.forEach(coder => {
    console.log(`${coder.name} is coder cohort ${coder.cohorte}`);
});

/*
A diferencia de for...of o for...in, forEach es específico para arrays y no retorna valores ni interrumpe 
el ciclo, pero es más conciso para realizar acciones repetitivas sobre arrays. 
    ¿Cuál es la diferencia entre for...of y for...in y cuándo usarías cada uno? 
    for...of recorre valores de iterables (como arrays), mientras que for...in recorre las claves de un objeto. 
*/