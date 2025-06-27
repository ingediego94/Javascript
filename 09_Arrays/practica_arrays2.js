const lista1 = ["maria", "carlos", "juan"];

// pop()    = eliminar y retornar del final
let final = lista1.pop();
console.log(lista1);
console.log(final);


// unshift = agregar varios al inicio
lista1.unshift("diego", "alexander", "vallejo");
console.log(lista1);

// shift() = elimina del al inicio y retorna
let inicio = lista1.shift();
console.log(inicio);
console.log(lista1);


// push()   =  agregar al final
lista1.push("dieego14apu@hotmail.com", "caliche");
console.log(lista1);

// slice() = realiza copia parcial del array en otro n-1
let lista2 = lista1.slice(1,5);
console.log(lista2);

// splice()  = elimina en un rango y agrega nuevo elemento
lista1.splice(1,2,"MOHAMED", 23, true);
console.log(lista1);
