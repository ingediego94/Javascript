// Comentario de una linea

/*Comentario
de
varias
lineas */


// var nombre = 'Camila';       Forma antigua de variables

let nombre = 'Diego';
let Nombre = 'Ofelia';
let nombres = 'Camila y Arturo'

// Escribe el contenido en el html con salto de linea. Obsoleto.
document.writeln(Nombre);

// Monstrar mensaje por consola navegador.
console.log(nombre);

//
document.getElementById("Saludo").textContent = nombres;


// We can declare multiple variables only with one 'let' at the beggining, 
// but it these are separated by commas.
let mother = 'Vanesa', father = 'Carlos', sister = 'Camilo', price=200;


// We can do the same in many lines as we want as long as all of them are separated
// by commas.
let product1 = 'T-shirt',
product2 = 'Jeans',
product3 = 'Shoes';


// We can't re-declare a variable with 'let' or 'const' it doesn't allowed, this is 
// possible only with 'var'.
let carName = 'BMW';
// let carName;     // this shows an error

// on the other hand, this is allowed, it hasn't errors.
var carName1 = 'Volvo';
var carName1;


// Arithmetic
// This is a sum:
let y = 5 + 2 + 3;                  // equal = 10

// This is a concatenation of text.
let x = "John" + " " + "Doe";       //equal= John Doe

// This is another concatenation inside a variable.
let z = 2 + 3 + "5";                //equal= 235 (as a text)


// const variables should be assigned when they are created:
const pi = 3.1416324;
// This is an error, because they are not in the same line:
// const pi;
// 3.1416324

// When to use const: A new Array:  for A new Object, A new Function, A new RegExp


/*
Block Scope:
Variables declared inside a { } block cannot be accessed from outside the block:

{
    let x = 2;
}

x can NOT be used here 



Global Scope
Variables declared with the var always have Global Scope.
Variables declared with the var keyword can NOT have block scope.
Variables declared with varinside a { } block can be accessed from outside the block:

{
    var x = 2;
}


x CAN be used here

---------------------------------------------------

Cannot be Redeclared

With let you can not do this:

let x = "John Doe";

let x = 0;



Variables defined with var can be redeclared.

With var you can do this:

var x = "John Doe";

var x = 0;

*/