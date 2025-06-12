
let nombre = 'Diego';
let edad = 29;

// Concatenacion de variables
console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");

// Con comilla invertida y ${}
console.log(`Hola a todos. ${nombre} y mi edad es ${edad}.`);

// Separado por comas.
console.log("Hola, mi nombre es", nombre, "y tengo", edad, "años.");

// This it will be equal 20Volvo because expressions are evaluated from left to right
let x = 16 + 4 + "Volvo";
console.log(x);

// Something similar happens here, the result it'll be Volvo164 (all string)
let y = "Volvo" + 16 + 4;
console.log(y)